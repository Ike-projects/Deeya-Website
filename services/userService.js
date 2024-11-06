const { db } = require('../config'); 
const bcrypt = require('bcrypt');

// Create a new user. All Users have a default role as buyer
async function createUser(userData) {
    try {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds); // Await the hashing process

        // Set the hashed password
        userData.password = hashedPassword;

        // Set a default role for new users
        userData.role = 'buyer'; // Default role

        // Add the user to the Firestore collection
        const docRef = await db.collection('users').add(userData);
        console.log('User added successfully:', docRef.id);
        
        return docRef.id;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}

// Verify User
async function verifyUserPassword(email, inputPassword) {
    try {
        // Fetch user data by email
        const snapshot = await db.collection('users').where('email', '==', email).get();
        if (snapshot.empty) {
            console.log('No matching user found');
            return false; // User not found
        }

        const userDoc = snapshot.docs[0];
        const storedHashedPassword = userDoc.data().password;

        // Compare the input password with the stored hashed password
        const match = await bcrypt.compare(inputPassword, storedHashedPassword);
        if (match) {
            console.log('Password is valid');
            return true; // Password match
        } else {
            console.log('Invalid password');
            return false; // Password does not match
        }
    } catch (error) {
        console.error('Error verifying password:', error);
        throw error;
    }
}

// Read a user by userId
async function getUser(userId) {
    try {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists) {
            console.log('User data:', doc.data());
            return doc.data();
        } else {
            console.log('User not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}


// Update a user
async function updateUser(userId, updatedData) {
    try {
        await db.collection('users').doc(userId).update(updatedData);
        console.log('User updated successfully');
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}


// Delete a user
async function deleteUser(userId) {
    try {
        await db.collection('users').doc(userId).delete();
        console.log('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}




module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};

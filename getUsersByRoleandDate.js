const { db } = require('./config');
async function getUsersByRoleAndDate(role) {
    try {
        const usersRef = db.collection('users');

        // Query by role and order by createdAt
        const snapshot = await usersRef
            .where('role', '==', role)
            .orderBy('createdAt', 'asc')
            .get();

        // Check if any documents were found
        if (snapshot.empty) {
            console.log('No matching documents.');
            return [];
        }

        // Map and format each document's data
        const users = snapshot.docs.map(doc => {
            const data = doc.data();

            // Convert Firestore Timestamps to JavaScript Dates
            data.createdAt = data.createdAt.toDate();
            data.updatedAt = data.updatedAt.toDate();

            return data;
        });

        console.log('Retrieved Users:', users);
        return users;
    } catch (error) {
        console.error('Error retrieving users:', error);
    }
}

getUsersByRoleAndDate('buyer');
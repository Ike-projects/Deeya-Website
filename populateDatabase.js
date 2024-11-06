const { db, time } = require('./config');


// dummy data for users
async function populateUsers() {
    const usersData = [
        {
            firstName: 'Captain',
            lastName: 'Lee',
            email: 'caplee@dummy.com',
            password: 'asdfl123',
            role: 'buyer',
            contactDetails: {
                phone: 1234567890,
                address: '123 Main St'
            },
            profileCompleted: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            firstName: 'Jane',
            lastName: 'Farmer',
            email: 'janefarmer@example.com',
            password: 'hashed456',
            role: 'admin',
            contactDetails: {
                phone: 9876543210,
                address: '456 Farm Lane'
            },
            profileCompleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let user of usersData) {
        await db.collection('users').add(user);
    }
    console.log('Users collection populated.');
}

// dummy data for products
async function populateProducts() {
    const productsData = [
        {
            productId: 'product1',
            farmerId: 'farmer1',
            productName: 'Tomatoes',
            category: ['Vegetables'],
            productDescription: 'Fresh tomatoes',
            price: 25,
            quantityAvailable: 100,
            discount: 0,
            discountedPrice: 2.5,
            minStockLimit: 20,
            restockStatus: true,
            expirationDate: time.fromDate(new Date('2025-01-01')),
            spoiledQuantity: 0,
            productLocation: 'Warehouse 1',
            images: 'https://media.istockphoto.com/id/1369929551/photo/organic-tomatoes-sale-on-market-stall.jpg?s=612x612&w=is&k=20&c=-0mcNnmm-1UNiz26q23ceHW3mZbJwbLFhoy3mEmrwR0=',
            promotion: {
                status: false,
                promotionDescription: '',
                promotionStart: null,
                promotionEnd: null
            },
            dateListed: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let product of productsData) {
        await db.collection('products').add(product);
    }
    console.log('Products collection populated.');
}

// Function to generate dummy data for admin management
async function populateAdminManagement() {
    const adminManagementData = [
        {
            adminId: 'admin1',
            userId: 'user2',
            addedBy: 'superuser1',
            permissions: {
                manageFarmers: true,
                viewFarmers: true,
                manageProducts: true,
                viewProducts: true,
                manageOrders: true,
                viewOrders: true,
                manageInventoryLogs: true,
                viewInventoryLogs: true,
                manageAdmins: true,
                viewAdmins: true,
                manageDelivery: true,
                viewDelivery: true,
                managePayment: true,
                viewPayment: true,
                manageMarketPlace: true,
                viewMarketPlace: true,
                manageSpoiledGoods: true,
                viewSpoiledGoods: true,
            },
        },
    ];

    for (let admin of adminManagementData) {
        await db.collection('adminManagement').add(admin);
    }
    console.log('Admin management collection populated.');
}

// dummy data for farmer records
async function populateFarmerRecords() {
    const farmerRecordsData = [
        {
            firstName: 'Alice',
            lastName: 'Green',
            farmDetails: {
                farmName: 'Green Farm',
                farmSize: 50, farmLocation: 'Valley Rd'
            },
            contactDetails: {
                phone: '9876543211',
                address: '123 Valley Rd',
                email: 'alicegreen@example.com'
            },
            products: [],
            createdBy: 'admin1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let farmer of farmerRecordsData) {
        await db.collection('farmerRecords').add(farmer);
    }
    console.log('Farmer records collection populated.');
}

// dummy data for audit logs
async function populateAuditLogs() {
    const auditLogsData = [
        {
            logId: 'log1',
            adminId: 'admin1',
            action: 'Added product',
            description: 'Admin added a new product to the inventory',
            timeActioned: new Date(),
            affectedId: 'product1',
        },
    ];

    for (let log of auditLogsData) {
        await db.collection('auditLog').add(log);
    }
    console.log('Audit log collection populated.');
}

// dummy data for inventory logs
async function populateInventoryLogs() {
    const inventoryLogsData = [
        {
            logId: 'log1',
            productId: 'product1',
            action: 'add',
            currentQuantity: 100,
            quantityChanged: 50,
            newQuantity: 150,
            updatedBy: 'admin1',
            time: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let log of inventoryLogsData) {
        await db.collection('inventoryLogs').add(log);
    }
    console.log('Inventory logs collection populated.');
}

// dummy data for spoiled goods
async function populateSpoiledGoods() {
    const spoiledGoodsData = [
        {
            spoiledLogId: 'spoil1',
            productId: 'product1',
            spoiledQuantity: 10,
            reason: ['Expired'],
            time: new Date(),
            dateRecorded: new Date(),
            reportedBy: 'admin1',
            updatedAt: new Date(),
        },
    ];

    for (let spoiled of spoiledGoodsData) {
        await db.collection('spoiledGoods').add(spoiled);
    }
    console.log('Spoiled goods collection populated.');
}

// Function to generate dummy data for marketplace
async function populateMarketPlace() {
    const marketPlaceData = [
        {
            listingId: 'listing1',
            productId: 'product1',
            price: 25,
            availableQuantity: 100,
            discount: 0,
            discountedPrice: 2.5,
            promotion: {
                status: false,
                promotionDescription: '',
                promotionStart: null,
                promotionEnd: null
            },
            buyerId: 'user1',
            dateListed: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let listing of marketPlaceData) {
        await db.collection('marketPlace').add(listing);
    }
    console.log('Marketplace collection populated.');
}

// Function to generate dummy data for cart
async function populateCart() {
    const cartData = [
        {
            cartId: 'cart1',
            products: ['product1'],
            buyerId: 'user1',
            totalAmount: 25,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let cart of cartData) {
        await db.collection('cart').add(cart);
    }
    console.log('Cart collection populated.');
}

// Function to generate dummy data for orders
async function populateOrders() {
    const ordersData = [
        {
            orderId: 'order1',
            productId: ['product1'],
            buyerId: 'user1',
            quantityPurchased: 5,
            totalPrice: 125,
            orderStatus: 'pending',
            orderDate: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let order of ordersData) {
        await db.collection('orders').add(order);
    }
    console.log('Orders collection populated.');
}

// Function to generate dummy data for delivery
async function populateDelivery() {
    const deliveryData = [
        {
            deliveryId: 'delivery1',
            orderId: 'order1',
            buyerId: 'user1',
            deliveryAddress: { address: '123 Main St', landmark: 'Near Park', city: 'Metropolis', state: 'State1', country: 'Country1', zipCode: 12345, contactDetails: { phone: '1234567890', email: 'johndoe@example.com' } },
            deliveryMethod: 'courier',
            deliveryCharge: 50,
            totalAmount: 125,
            paymentStatus: 'pending',
            deliveryStatus: 'pending',
            deliveryDate: time.fromDate(new Date('2024-12-01')),
            updatedAt: new Date(),
        },
    ];

    for (let delivery of deliveryData) {
        await db.collection('delivery').add(delivery);
    }
    console.log('Delivery collection populated.');
}

// Function to generate dummy data for payments
async function populatePayments() {
    const paymentData = [
        {
            paymentId: 'payment1',
            orderId: 'order1',
            buyerId: 'user1',
            paymentMethod: 'card',
            paymentAmount: 175,
            paymentDate: new Date(),
            paymentStatus: 'pending',
            updatedAt: new Date(),
        },
    ];

    for (let payment of paymentData) {
        await db.collection('payment').add(payment);
    }
    console.log('Payments collection populated.');
}

// Dummy data for Community Posts
async function populateCommunityPosts() {
    const postsData = [
        {
            postId: 'post1',
            authorId: 'user2',
            postTitle: 'Tips for Sustainable Farming',
            content: 'Here are some tips on how to practice sustainable farming...',
            image: 'https://www.freepik.com/free-photo/growing-organic-ecological-plants-fields-background_136712411.htm#fromView=keyword&page=1&position=30&uuid=b10489ea-84d5-49e7-8a9a-42fb4d0797a8', // replace with an actual image URL
            likes: 10,
            comments: [],
            shares: 5,
            views: 100,
            category: 'blog',
            datePosted: new Date(),
            updatedAt: new Date(),
        },
        {
            postId: 'post2',
            authorId: 'user1',
            postTitle: 'New Organic Farming Techniques',
            content: 'Discover the latest techniques in organic farming...',
            image: 'https://www.freepik.com/free-photo/woman-holding-basket-full-different-vegetables_8797897.htm#fromView=keyword&page=1&position=0&uuid=261f212a-5bf0-4ada-88f4-770450622a5b',
            likes: 25,
            comments: [],
            shares: 10,
            views: 200,
            category: 'blog',
            datePosted: new Date(),
            updatedAt: new Date(),
        },
    ];

    for (let post of postsData) {
        await db.collection('communityPosts').add(post);
    }
    console.log('Community posts collection populated.');
}

// Dummy data for Contact Us
async function populateContactUs() {
    const messagesData = [
        {
            messageId: 'msg1',
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Product Inquiry',
            messageBody: 'I have a question about product availability.',
            dateSent: new Date(),
        },
        {
            messageId: 'msg2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Delivery Options',
            messageBody: 'I would like to know more about delivery options.',
            dateSent: new Date(),
        },
    ];

    for (let message of messagesData) {
        await db.collection('contactUs').add(message);
    }
    console.log('Contact Us collection populated.');
}

// run all the population functions
async function populateDatabase() {
    /*await populateUsers();*/
    await populateProducts();
    await populateAdminManagement();
    await populateFarmerRecords();
    await populateAuditLogs();
    await populateInventoryLogs();
    await populateSpoiledGoods();
    await populateMarketPlace();
    await populateCart();
    await populateOrders();
    await populateDelivery();
    await populatePayments();
    await populateCommunityPosts(); 
    await populateContactUs();
}

// Execute the population script
populateDatabase()
    .then(() => {
        console.log('Database populated successfully!');
    })
    .catch((error) => {
        console.error('Error populating database:', error);
    });

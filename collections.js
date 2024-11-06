const { db } = require ('./config');

const collections = {
users: {
  userId: 'string',
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  password: 'string (hashed)', 
  role: 'string (buyer, admin, superuser)',
  contactDetails: {
      phone: 'number',
      address: 'string',
  },
  profileCompleted: 'boolean',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
  },

adminManagement: {
  adminId: 'string',
  userId: 'string (reference to admin user)',
  addedBy: 'string (superuser reference)',
  permissions: {
      manageFarmers: 'boolean',
      viewFarmers: 'boolean',
      manageProducts: 'boolean',
      viewProducts: 'boolean',
      manageOrders: 'boolean',
      viewOrders: 'boolean',
      manageInventoryLogs: 'boolean',
      viewInventoryLogs: 'boolean',
      manageAdmins: 'boolean',
      viewAdmins: 'boolean',
      manageDelivery: 'boolean',
      viewDelivery: 'boolean',
      managePayment: 'boolean',
      viewPayment: 'boolean',
      manageMarketPlace: 'boolean',
      viewMarketPlace: 'boolean',
      manageSpoiledGoods: 'boolean',
      viewSpoiledGoods: 'boolean',
  },
},
auditLog: {
  logId: 'string',
  adminId: 'string',
  action: 'string',
  description: 'string',
  timeActioned: 'timestamp',
  affectedId: 'string',
},

farmerRecords: {
  farmerId: 'string',
  firstName: 'string',
  lastName: 'string',
  farmDetails: {
      farmName: 'string',
      farmSize: 'number',
      farmLocation: 'string',
  },
  contactDetails: {
      phone: 'string',
      address: 'string',
      email: 'string',
  },
  products: 'array of strings (product references)',
  createdBy: 'string (admin reference)',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
},

products: {
  productId: 'string',
  farmerId: 'string (farmer reference)',
  productName: 'string',
  category: ['string'],
  productDescription: 'string',
  price: 'number',
  quantityAvailable: 'number',
  discount: 'number',
  discountedPrice: 'number',
  minStockLimit: 'number',
  restockStatus: 'boolean',
  expirationDate: 'timestamp',
  spoiledQuantity: 'number',
  productLocation: 'string',
  images: 'string',
  promotion: {
      status: 'boolean',
      promotionDescription: 'string',
      promotionStart: 'timestamp',
      promotionEnd: 'timestamp',
  },
  dateListed: 'timestamp',
  updatedAt: 'timestamp',
},

inventoryLogs: {
  logId: 'string',
  productId: 'string (product reference)',
  action: 'string (stock added, stock reduced, restocked)',
  currentQuantity: 'number',
  quantityChanged: 'number',
  newQuantity: 'number',
  updatedBy: 'string (admin reference)',
  time: 'timestamp',
  updatedAt: 'timestamp',
},

spoiledGoods: {
  spoiledLogId: 'string',
  productId: 'string (product reference)',
  spoiledQuantity: 'number',
  reason: ['string'],
  time: 'timestamp',
  dateRecorded: 'timestamp',
  reportedBy: 'string (admin reference)',
  updatedAt: 'timestamp',
},

marketPlace: {
  listingId: 'string',
  productId: 'string (product reference)',
  price: 'number',
  availableQuantity: 'number',
  discount: 'number',
  discountedPrice: 'number',
  promotion: {
      status: 'boolean',
      promotionDescription: 'string',
      promotionStart: 'timestamp',
      promotionEnd: 'timestamp',
  },
  buyerId: 'string (buyer reference)',
  dateListed: 'timestamp',
  updatedAt: 'timestamp',
},

cart: {
  cartId: 'string',
  products: 'array of strings (product references)',
  buyerId: 'string (buyer reference)',
  totalAmount: 'number',
  cartStatus: 'string (active, checked-out, cancelled)',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
},

orders: {
  orderId: 'string',
  productId: 'array of strings (product references)',
  buyerId: 'string (buyer reference)',
  quantityPurchased: 'number',
  totalPrice: 'number',
  orderStatus: 'string (pending, processing, shipped, delivered, cancelled)',
  orderDate: 'timestamp',
  updatedAt: 'timestamp',
},

delivery: {
  deliveryId: 'string',
  orderId: 'string (order reference)',
  buyerId: 'string (buyer reference)',
  deliveryAddress: {
    address: 'string',
    landmark: 'string',
    city: 'string',
    state: 'string',
    country: 'string',
    zipCode: 'string',
    contactDetails: {
      phone: 'string',
      email: 'string',
    },
  },
  deliveryMethod: 'string (courier, local, pickup)',
  deliveryCharge: 'number',
  totalAmount: 'number',
  paymentStatus: 'string (pending, processing, completed, cancelled)',
  deliveryStatus: 'string (pending, processing, shipped, delivered, cancelled)',
  deliveryDate: 'timestamp',
  updatedAt: 'timestamp',
},

payment: {
  paymentId: 'string',
  orderId: 'string (order reference)',
  buyerId: 'string (buyer reference)',
  paymentMethod: 'string (card, cash, online)',
  paymentAmount: 'number',
  paymentDate: 'timestamp',
  paymentStatus: 'string (pending, processing, completed, cancelled)',
  updatedAt: 'timestamp',
},

communityPosts: {
  postId: 'string',
  authorId: 'string (user reference)',
  postTitle: 'string',
  content: 'string',
  image: 'string',
  likes: 'number',
  comments: 'array of strings (comment references)',
  shares: 'number',
  views: 'number',
  category: 'string (blog, news, updates, announcements)',
  datePosted: 'timestamp',
  updatedAt: 'timestamp', 
},
contactUs: {
  messageId: 'string',
  name: 'string',
  email: 'string',
  subject: 'string',
  messageBody: 'string',
  dateSent: 'timestamp',
},
}

// Create collections in Firestore
async function createCollections() {
  for (const eachCollection in collections) {
    const collectionRef = db.collection(eachCollection);

    await collectionRef.doc('example-collection').set(collections[eachCollection]);
    console.log(`Collection ${eachCollection} created successfully with a placeholder document `);
  }
}

createCollections()
  .then(() => console.log('Collections setup completed successfully'))
  .catch(error => console.error('Error setting up collections:', error));

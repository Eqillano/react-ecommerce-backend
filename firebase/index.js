var admin = require("firebase-admin");

var serviceAccount = require("../config/AccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-7d247.firebaseio.com",
});

module.exports = admin;

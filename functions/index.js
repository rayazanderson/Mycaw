const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.getSquawks = functions.https.onRequest((request, response) => {
  admin
    .firestore()
    .collection("squawks")
    .get()
    .then((data) => {
      let squawks = [];
      data.forEach((doc) => {
        squawks.push(doc.data());
      });
      return response.json(squawks);
    })
    .catch((err) => console.error(err));
});

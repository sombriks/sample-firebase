/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send({
    data: ["Hello from Firebase!", new Date()],
  });
});

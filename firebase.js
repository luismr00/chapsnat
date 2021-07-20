// // import * as firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/firebase-firestore";
// // Your web app's Firebase configuration
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAqz93W0liy2OtXLY9j9dFTeK0Kd5OEX28",
//     authDomain: "chapsnat-luis.firebaseapp.com",
//     projectId: "chapsnat-luis",
//     storageBucket: "chapsnat-luis.appspot.com",
//     messagingSenderId: "575667693492",
//     appId: "1:575667693492:web:cb999c4357360ccf1f34e1"
//   };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let firestore = firebase.firestore();
// export default firestore;


import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
  apiKey: "AIzaSyC7CQwBSzjC_tlEiMd2Mc8Sh9Fb_Cwc1p8",
  authDomain: "chapsnat-3f4f7.firebaseapp.com",
  projectId: "chapsnat-3f4f7",
  storageBucket: "chapsnat-3f4f7.appspot.com",
  messagingSenderId: "239440555368",
  appId: "1:239440555368:web:d7d431a3733e778d273add",
  measurementId: "G-W4Y70B8JL2",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "",
  authDomain: "yanni-marioplan.firebaseapp.com",
  databaseURL: "https://yanni-marioplan.firebaseio.com",
  projectId: "yanni-marioplan",
  storageBucket: "yanni-marioplan.appspot.com",
  messagingSenderId: "738659985805",
  appId: "1:738659985805:web:bf4858db1bbbf2e072f5c4",
  measurementId: "G-36FDLMHGM3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
// firebase.analytics();

export default firebase;

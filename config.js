import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDwceFTeCuK5tjRFHNw6KSkSxxrSVW_Qp0",
    authDomain: "project71-4d7b4.firebaseapp.com",
    projectId: "project71-4d7b4",
    storageBucket: "project71-4d7b4.appspot.com",
    messagingSenderId: "1005230406391",
    appId: "1:1005230406391:web:8364829e6d10d70d3431f2"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

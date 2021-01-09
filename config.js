import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDFRhtKb3ScnkX01CJXSp61cQvSVD3ml4o",
    authDomain: "storyhub-52e9d.firebaseapp.com",
    projectId: "storyhub-52e9d",
    storageBucket: "storyhub-52e9d.appspot.com",
    messagingSenderId: "397425438525",
    appId: "1:397425438525:web:493d4d6fa1bf845a7b5f54"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAnGzLCO3W62MS-HjCjTwyLqTIbVwA7p0Y",
  authDomain: "trackmehours.firebaseapp.com",
  databaseURL: "https://trackmehours.firebaseio.com",
  projectId: "trackmehours",
  storageBucket: "",
  messagingSenderId: "711255080607"
};

const firebaseInit = firebase.initializeApp(config);
export default firebaseInit.firestore();

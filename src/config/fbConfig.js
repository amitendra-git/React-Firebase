import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC1mPsxA-iIV3bqoEFGSoKoFcivkIQaFHQ",
  authDomain: "react-firebase-makeitlive.firebaseapp.com",
  databaseURL: "https://react-firebase-makeitlive.firebaseio.com",
  projectId: "react-firebase-makeitlive",
  storageBucket: "react-firebase-makeitlive.appspot.com",
  messagingSenderId: "5409567123"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
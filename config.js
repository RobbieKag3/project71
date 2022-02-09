import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDRVoVuiJxCOz5Z6PE233tqfvck_iiGDcg",
    authDomain: "project71-e6eab.firebaseapp.com",
    projectId: "project71-e6eab",
    storageBucket: "project71-e6eab.appspot.com",
    messagingSenderId: "38197707445",
    appId: "1:38197707445:web:8d93ec3a700a44f1bdf4fc"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

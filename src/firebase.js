// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCgDNTzNadY1h0AnMtss1dt__eMkK12nTk",
    authDomain: "whatsapp-clone-1dcea.firebaseapp.com",
    projectId: "whatsapp-clone-1dcea",
    storageBucket: "whatsapp-clone-1dcea.appspot.com",
    messagingSenderId: "83055410568",
    appId: "1:83055410568:web:39d125c2945c99bc15ce3d",
    measurementId: "G-ED8D1YYQ5P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
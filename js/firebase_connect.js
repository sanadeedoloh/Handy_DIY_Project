const firebaseConfig = {
    apiKey: "AIzaSyCCC8QmCq4iHn7LA9FDD3aVEN6kH8rbF3w",
    authDomain: "handy-d1f3c.firebaseapp.com",
    projectId: "handy-d1f3c",
    storageBucket: "handy-d1f3c.appspot.com",
    messagingSenderId: "961224767797",
    appId: "1:961224767797:web:60a9f96ce7852635b2347c",
    measurementId: "G-WBLH4GYSZ9"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 // Initialize variables
 const auth = firebase.auth();
 const db = firebase.firestore();


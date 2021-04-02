import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAkT__JU3YK4cAPbPjBoCMJ5MV9zSjPRdc",
    authDomain: "shop-9bf51.firebaseapp.com",
    projectId: "shop-9bf51",
    storageBucket: "shop-9bf51.appspot.com",
    messagingSenderId: "796207427707",
    appId: "1:796207427707:web:6db7ae5d94337845cfb2de",
    measurementId: "G-X8M68RB90D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
// export default firebaseConfig;
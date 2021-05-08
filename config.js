import * as firebase from 'firebase' 
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDPwHxJtyWdq5zyDQyhLBgWevI7r8-CK4M",
    authDomain: "wireless-library-5e683.firebaseapp.com",
    projectId: "wireless-library-5e683",
    storageBucket: "wireless-library-5e683.appspot.com",
    messagingSenderId: "443048917108",
    appId: "1:443048917108:web:48ed5f3c63b0f67ec83921"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
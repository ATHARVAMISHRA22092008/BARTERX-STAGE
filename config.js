import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAvel56C6_5htFFTj7eVQH8RJgN6QhwDbA",
  authDomain: "barterx-94c86.firebaseapp.com",
  databaseURL: "https://barterx-94c86.firebaseio.com",
  projectId: "barterx-94c86",
  storageBucket: "barterx-94c86.appspot.com",
  messagingSenderId: "1086701120098",
  appId: "1:1086701120098:web:612042fdbfa9a42e3abf3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();

import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBQ_ArYTm_rJ684VKEXQ2-gOZU4RMZlB8I",
    authDomain: "booksanta-16989.firebaseapp.com",
    databaseURL: "https://booksanta-16989.firebaseio.com",
    projectId: "booksanta-16989",
    storageBucket: "booksanta-16989.appspot.com",
    messagingSenderId: "10721774895",
    appId: "1:10721774895:web:376725aae5485956b425da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  /*var firebaseConfig = {
    apiKey: "AIzaSyCmMxvac_obZnPh3DNy2GuX3n5q_IeeW6c",
    authDomain: "book-santa-fa416.firebaseapp.com",
    databaseURL: "https://book-santa-fa416.firebaseio.com",
    projectId: "book-santa-fa416",
    storageBucket: "book-santa-fa416.appspot.com",
    messagingSenderId: "602538203039",
    appId: "1:602538203039:web:0cc8515a905c53c9fa4faa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/
  export default firebase.firestore();
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  var firebaseConfig = {
    apiKey: "AIzaSyCrD8e1F_ktdSDwh5zNpU5h6o_gItZ4FmY",
    authDomain: "tutorial-8017f.firebaseapp.com",
    databaseURL: "https://tutorial-8017f.firebaseio.com",
    projectId: "tutorial-8017f",
    storageBucket: "tutorial-8017f.appspot.com",
    messagingSenderId: "792198843780",
    appId: "1:792198843780:web:a7aa3249d6e57c3d1ee1d1",
    measurementId: "G-R751YQ62KM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});


  export default firebase;
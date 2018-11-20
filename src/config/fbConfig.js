  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNCwxtpbm01ozq3Ro6xB5jeUTqmzngmD4",
    authDomain: "bash-marioplan.firebaseapp.com",
    databaseURL: "https://bash-marioplan.firebaseio.com",
    projectId: "bash-marioplan",
    storageBucket: "bash-marioplan.appspot.com",
    messagingSenderId: "641880342336"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
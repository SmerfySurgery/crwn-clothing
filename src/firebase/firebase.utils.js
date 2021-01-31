import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDr9Cgcn8x-jOTE4WIpZHRRbSIEdQ4AL3k",
    authDomain: "crwn-db-f5ea5.firebaseapp.com",
    projectId: "crwn-db-f5ea5",
    storageBucket: "crwn-db-f5ea5.appspot.com",
    messagingSenderId: "617728933716",
    appId: "1:617728933716:web:00202c9f06b8161b4192c1",
    measurementId: "G-YB2D6LVVLR"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
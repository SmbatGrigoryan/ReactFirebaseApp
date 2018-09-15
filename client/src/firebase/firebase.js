import * as firebase from 'firebase';
//import keys from './config/keys';


// const config = {
//   apiKey: keys.FIREBASE_API_KEY,
//   authDomain: keys.FIREBASE_AUTH_DOMAIN,
//   databaseURL: keys.FIREBASE_DATABASE_URL,
//   projectId: keys.FIREBASE_PROJECT_ID,
//   storageBucket: keys.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID
// };
const configToModify = {
  apiKey: "AIzaSyD7gPt20JfczAQXvON6c2jfSOLcd3dzuws",
  authDomain: "newreactapp.firebaseapp.com",
  databaseURL: "https://newreactapp.firebaseio.com",
  projectId: "newreactapp",
  storageBucket: "newreactapp.appspot.com",
  messagingSenderId: "682040577963"
};

const config = {
  apiKey: "AIzaSyD7gPt20JfczAQXvON6c2jfSOLcd3dzuws",
  authDomain: "newreactapp.firebaseapp.com",
  databaseURL: "https://newreactapp.firebaseio.com",
  projectId: "newreactapp",
  storageBucket: "newreactapp.appspot.com",
  messagingSenderId: "682040577963"
};



firebase.initializeApp(config);


const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider }



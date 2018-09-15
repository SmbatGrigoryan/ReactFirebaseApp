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




firebase.initializeApp(config);


const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider }



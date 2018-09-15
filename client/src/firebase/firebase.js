import * as firebase from 'firebase';
import keys from './config/keys';





const configSelf = {
  apiKey: "AIzaSyD7gPt20JfczAQXvON6c2jfSOLcd3dzuws",
  authDomain: "newreactapp.firebaseapp.com",
  databaseURL: "https://newreactapp.firebaseio.com",
  projectId: "newreactapp",
  storageBucket: "newreactapp.appspot.com",
  messagingSenderId: "682040577963"
};

const config = {
  apiKey: keys.FIREBASE_API_KEY,
  authDomain: keys.FIREBASE_AUTH_DOMAIN,
  databaseURL: keys.FIREBASE_DATABASE_URL,
  projectId: keys.FIREBASE_PROJECT_ID,
  storageBucket: keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider }


// db.ref('notes').once('value')
//     .then((dataSnapshut) => {
//       console.log(dataSnapshut.val());
//     })
//     .catch((error) => {
//       console.log(error)
//     });
//
// db.ref('notes').on('value', (snapshot) =>{
//   const arr = [];
//
//   snapshot.forEach((doc) => {
//     arr.push({
//       id: doc.key,
//       ... doc.val()
//     })
//   });
//   console.log(arr)
// });
//
// setTimeout(() => {
//   db.ref('notes/-LLYton1HLN9puq1qSLh').update({body: "w"})
// }, 5000);

// setInterval(() => {
//   db.ref('notes').push({
//     title: 'TITLE',
//     body: 'SOME BODY'
//   })
// }, 5000);



// db.ref('notes').push({
//   title: 'TITLE',
//   body: 'SOME BODY'
// })
//
// db.ref('notes').push({
//   title: 'TITLE 2',
//   body: 'SOME BODY 2'
// })
//
// db.ref('notes').push({
//   title: 'TITLE 3',
//   body: 'SOME BODY 3'
// })
// db.ref('notes').push('STRING')
//
// db.ref('notes/-LLYthaNM3AD8ch2t2TO/body').remove();
//
// db.ref('notes/-LLYw9vkWnoAtl886bJ_').update({z: 'zzzzzzzzzzzzz'})
//     .then(() => {
//       console.log('------------->')
//     })
//     .catch((error) => {
//       console.log(error)
//     });




// let path = '/reletives/nested';
//
// db.ref(path).once('value')
//     .then((dataSnapshot) => {
//       console.log(dataSnapshot.val())
//     })
//     .catch((error) => {
//       console.log(error)
//     });

// db.ref().on('value', (dataSnapshot) => {
//   console.log(new Date().toLocaleString())
//   console.log(dataSnapshot.val())
//
//    let first = dataSnapshot.val().first ? dataSnapshot.val().first: '',
//     middle =dataSnapshot.val().middle || '',
//     last = dataSnapshot.val().last || '',
//     born = dataSnapshot.val().born || '';
//
//
//   console.log(` ------------> ${first}  ${middle}  ${last}  ${born}`)
//
// })

// db.ref().set(null).then(() => {
//   console.log('db.ref().set(null).then(() => {')
// });



//
// setTimeout( () => {
//       db.ref().set({
//         first: "Alan",
//         middle: "Mathison",
//         last: "Grigoryan",
//         born: 1987,
//         reletives: {
//           first: "Ada",
//           last: "Lovelace",
//           born: 2015,
//           nested: {
//             nested1: 'nested1',
//             nested2: 'nested1'
//           }
//         }
//       });
//   },
//     2000);
//
// setTimeout( () => {
//       db.ref().set({
//         first: "Alan",
//         middle: "Mathison",
//         last: "Grigoryan",
//         born: 1987,
//         reletives: {
//           first: "Ada",
//           last: "Lovelace",
//           born: 2015,
//           nested: {
//             nested1: 'nested5',
//             nested2: 'nested5'
//           }
//         }
//       });
//   },
//     5000);
//
// setTimeout( () => {
//       db.ref().set(null);
//   },
//     10000);
//
//
// db.ref().update({
//   first: "Smbat",
//   middle: null,
//   'reletives/first': 'unnoun',
//   'reletives/nested/nested1': 1111
// }).then(() => {
//   console.log('successfully updated')
// });
//
//
//
//


// db.ref('att/att2').remove()
//     .then(() => {
//       console.log("Remove succeeded . . . ")
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//
// db.ref('born').remove()
//     .then(() => {
//       console.log("Remove succeeded . . . ")
//     })
//     .catch((error) => {
//       console.log(error);
//     });





// firebase.database()

//
// firebase.database()
//     .ref('first')
//     .set('Smbat');
//
// firebase.database()
// .ref('att')
// .set({
//   att1: 55,
//   att2: 2
// })
//     .then((doc) => {
//   console.log('doc -------------->', doc)
// }).catch((err) => {
//   console.log(err)
// });


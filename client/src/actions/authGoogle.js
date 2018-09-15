import { firebase, googleAuthProvider } from '.././firebase/firebase'

const login = (uid) => {
  return {
    type: 'LOG_IN',
    uid
  }
};

const startLogIn = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
};

const logout = () => {
  return {
    type: 'LOG_OUT'
  }
};

const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  }
};


export { startLogIn, startLogOut, login, logout };
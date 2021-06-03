import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCds0okrKw8POtwvrHvp62sXP99UBzqDlw",
    authDomain: "clothing-store-15a9b.firebaseapp.com",
    projectId: "clothing-store-15a9b",
    storageBucket: "clothing-store-15a9b.appspot.com",
    messagingSenderId: "924784699148",
    appId: "1:924784699148:web:6b3444c94892d0186fcb29",
    measurementId: "G-QF6M78KH36"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName,email } = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,email,createAt,...additionalData
      })

    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

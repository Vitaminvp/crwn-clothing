import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQ1Tm43w4oqSdoDdDcXg4PxY7GTnMQdY4",
  authDomain: "crown-vitamin.firebaseapp.com",
  databaseURL: "https://crown-vitamin.firebaseio.com",
  projectId: "crown-vitamin",
  storageBucket: "crown-vitamin.appspot.com",
  messagingSenderId: "6609143903",
  appId: "1:6609143903:web:6f2256ebed72be8980b3ea",
  measurementId: "G-LG9ZPLM972"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
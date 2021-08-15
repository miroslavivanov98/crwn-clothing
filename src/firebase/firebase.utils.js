import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyChko-B5lN-LCRrsdMU8bnpNTMus0ltZE0',
  authDomain: 'crwn-db-e543e.firebaseapp.com',
  projectId: 'crwn-db-e543e',
  storageBucket: 'crwn-db-e543e.appspot.com',
  messagingSenderId: '46689381335',
  appId: '1:46689381335:web:1550edba2f6fba8f28f992',
  measurementId: 'G-9718EFTZT6',
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.mesage);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: ' select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

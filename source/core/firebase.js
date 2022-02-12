import firebase from 'firebase-admin';

import serviceAccount from '../../firebaseAccessDev.json';

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

export const firestore = firebase.firestore();

export default firebase;

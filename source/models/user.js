import { firestore } from 'core/firebase';

const userCollection = firestore.collection('user');

export const getByEmailAndPassword = async (email = '', password = '') => {
  const querySnapshot = await userCollection
    .where('email', '==', email)
    .where('password', '==', password.toString())
    .get();

  if (querySnapshot.empty) throw new Error('there is no user');

  const docSnapshot = querySnapshot.docs[0];
  const data = docSnapshot.data();
  data.id = docSnapshot.id;
  delete data.password;
  return {
    error: false,
    errorMessage: null,
    userData: data,
  };
};

export const loginWithEmailAndPassword = async () => {};

export default {
  getByEmailAndPassword,
};

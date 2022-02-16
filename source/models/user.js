import { firestore } from 'core/firebase';

const userCollection = firestore.collection('user');

export const getByEmailAndPassword = async (email = '', password = '') => {
  const querySnapshot = await userCollection
    .where('email', '==', email)
    .where('password', '==', password.toString())
    .get();

  if (querySnapshot.empty) return null;

  const docSnapshot = querySnapshot.docs[0];
  const data = docSnapshot.data();
  data.id = docSnapshot.id;
  delete data.password;

  return data;
};

export default {
  getByEmailAndPassword,
};
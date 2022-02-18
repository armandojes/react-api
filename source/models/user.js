import { firestore } from 'core/firebase';

const userCollection = firestore.collection('user');

/**
 * get a user by email
 * @param {String} email - user's email
 */
export const getUserByEmail = async (email = '') => {
  try {
    const querySnapshot = await userCollection.where('email', '==', email.toString().toLowerCase()).get();
    if (querySnapshot.empty) throw new Error('email not found');
    const docSnapshot = querySnapshot.docs[0];
    const data = docSnapshot.data();
    data.id = docSnapshot.id;
    return {
      error: false,
      errorMessage: null,
      userData: data,
    };
  } catch (error) {
    return {
      error: true,
      errorMessage: error.message,
      userData: null,
    };
  }
};

export default {
  getUserByEmail,
};

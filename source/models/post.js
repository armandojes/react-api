import { firestore } from 'source/core/firebase';

const postCollection = firestore.collection('post');

export const getAll = async () => {
  const snapshot = await postCollection.get();
  return snapshot.docs.map((doc) => doc.data());
};

export default postCollection;

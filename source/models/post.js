import { firestore } from 'source/core/firebase';
import { decodeBase64 } from '../helpers/base64';

const postCollection = firestore.collection('posts');

/**
 * get all posts
 * @returns {Promise<Array>} array of posts or empty array
 */
export const getAll = async () => {
  const querySnapshot = await postCollection.get();
  return querySnapshot.docs.map((currentDoc) => {
    const data = currentDoc.data();
    return {
      ...data,
      id: currentDoc.id,
      body: decodeBase64(data.body),
    };
  });
};

export default postCollection;

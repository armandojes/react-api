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

/**
 * get post by url
 * @param {String} url
 * @return {Promise<Object|null>} post's data or null if not exist
 */
export const getPostByUrl = async (url) => {
  const querySnapshot = await postCollection.where('url', '==', url.toString().toLowerCase()).get();
  if (!querySnapshot.empty) {
    const snapshot = querySnapshot.docs[0];
    const data = snapshot.data();
    return {
      ...data,
      id: snapshot.id,
      body: decodeBase64(data.body),
    };
  }
  return null;
};

export default {
  getAll,
  getPostByUrl,
};

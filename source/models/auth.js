import { jwtPrivateKey } from 'source/config';
import jwt from 'jsonwebtoken';

/**
 * @typedef {Object} createTokenResponse
 * @property {Boolean} error - operation status
 * @property {String|null} token - jwt token if operation is success
 * @property {String|null} errorMessage - error description if exist
 */

/**
 * create a new jwt token
 * @param {Object} payload - data to encode into token
 * @returns {Promise<createTokenResponse>}
 */
export const createToken = (payload) => new Promise((resolve) => {
  jwt.sign(payload, jwtPrivateKey, { expiresIn: '7d' }, (error, token) => {
    if (error) {
      resolve({
        error: true,
        errorMessage: error.toString(),
        token: null,
      });
    }
    resolve({
      token,
      error: false,
      errorMessage: null,
    });
  });
});

/**
 * @typedef {Object} decodeTokenResponse
 * @property {Boolead} error - operation status
 * @property {} payload - data decoded if operation is success
 * @property {} errorMessage - error description if operation is failed
 */

/**
 * decode a jwt token
 * @param {String} token - jwt token
 * @returns {Promise<decodeTokenResponse>}
 */
export const decodeToken = (token) => new Promise((resolve) => {
  jwt.verify(token, jwtPrivateKey, (error, dataDecoded) => {
    if (error) {
      resolve({
        error: true,
        payload: null,
        errorMessage: error.toString(),
      });
    }
    resolve({
      error: false,
      payload: dataDecoded,
      errorMessage: null,
    });
  });
});

export default {
  createToken,
  decodeToken,
};

const jwtPrivateKeyList = {
  development: 'someJwtPrivateKey',
  test: 'someJwtPrivateKey',
};

export const jwtPrivateKey = jwtPrivateKeyList[ENV];

export default {
  jwtPrivateKey,
};

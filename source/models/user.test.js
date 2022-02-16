import { getByEmailAndPassword } from './user';

const userExpect = {
  email: 'armandodejesus678@gmail.com',
  id: 'nuuvAfOO7uXmzZULEZTZ',
  lastName: 'santiz lopez',
  name: 'armando de jesus',
  role: 'admin',
};

describe('users', () => {
  describe('get by email and password', () => {
    test('geeting a non exist user', async () => {
      const data = await getByEmailAndPassword('jusnanonExistEmail@gmail.com', 'justapassword');
      expect(data).toBe(null);
    });
    test('test with empty paramerters', async () => {
      const data = await getByEmailAndPassword();
      expect(data).toBe(null);
    });
    test('getting with correct email and incorrect password', async () => {
      const data = await getByEmailAndPassword('armandodejesus678@gmail.com', '123456798');
      expect(data).toBe(null);
    });
    test('getting with correct password and incorrect email', async () => {
      const data = await getByEmailAndPassword('armandodejesus678@gmail.com', '111111111');
      expect(data).toBe(null);
    });
    test('getting correct user', async () => {
      const data = await getByEmailAndPassword('armandodejesus678@gmail.com', '123456789');
      expect(data).toEqual(userExpect);
    });
    test('getting correct user numerical password', async () => {
      const data = await getByEmailAndPassword('armandodejesus678@gmail.com', 123456789);
      expect(data).toEqual(userExpect);
    });
  });
});

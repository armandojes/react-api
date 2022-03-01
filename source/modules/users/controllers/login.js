import user from 'models/user';
import auth from 'models/auth';
import validator from 'helpers/validator';
import asyncErrorWrapper from '../../../helpers/asyncErrorWrapper';

const login = async (request, response) => {
  const errors = validator(request.body, {
    password: {
      required: true,
      length: { min: 8, max: 32 },
    },
    email: {
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      required: true,
      length: { min: 5, max: 100 },
      message: {
        match: 'email must be a valid email',
      },
    },
  });

  if (errors) return response.error(errors, 400);

  const userResponse = await user.getUserByEmail(request.body.email);

  // validate email
  if (userResponse.error) {
    return response.error(userResponse.errorMessage);
  }

  // validate password
  if (userResponse.userData.password.toString() !== request.body.password.toString()) {
    return response.error('the password is incorrect');
  }

  const secureUserData = { ...userResponse.userData };
  delete secureUserData.password;

  const tokenResponse = await auth.createToken(secureUserData);
  if (tokenResponse.error) return response.error(tokenResponse.errorMessage, 500);

  return response.success({
    token: tokenResponse.token,
    userData: secureUserData,
  });
};

export default asyncErrorWrapper(login);

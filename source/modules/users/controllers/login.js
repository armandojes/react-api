// import user from 'models/user';
// import auth from 'models/auth';
import validator from 'helpers/validator';

const login = async (request, response) => {
  const errors = validator(request.body, {
    password: {
      type: String,
      required: true,
      length: { min: 8, max: 32 },
    },
    email: {
      type: String,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      required: true,
      length: { min: 5, max: 100 },
      message: {
        match: 'email must be a valid email',
      },
    },
  });

  if (errors) return response.error(errors, 400);

  return response.success({ message: 'ok' });
};

export default login;

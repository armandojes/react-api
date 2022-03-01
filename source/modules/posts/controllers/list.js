import { getAll } from 'models/post';
import asyncErrorWrapper from '../../../helpers/asyncErrorWrapper';

const list = async (request, response) => {
  const posts = await getAll();
  response.success({ posts });
};

export default asyncErrorWrapper(list);

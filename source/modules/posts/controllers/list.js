import { getAll } from 'models/post';

const list = async (request, response) => {
  const posts = await getAll();

  response.success({ posts });
};

export default list;

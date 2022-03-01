import asyncErrorWrapper from 'helpers/asyncErrorWrapper';
import { getPostByUrl } from '../../../models/post';

const getSpecificPost = async (request, response) => {
  const { url } = request.params;

  const data = await getPostByUrl(url);

  if (!data) response.error('post not found', 404);
  else response.success({ post: data });
};

export default asyncErrorWrapper(getSpecificPost);

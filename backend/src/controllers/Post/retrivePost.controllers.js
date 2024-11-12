import PostModel from '../../models/post.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';

const retrievePosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res
      .status(200)
      .json(new successApiResponse(200, 'Retrieve Successful', posts));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default retrievePosts;

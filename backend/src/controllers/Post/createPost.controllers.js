import PostModel from '../../models/post.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';
import uploadToCloudinary from '../../utils/uploadToCloudinary.utils.js';

const createPost = async (req, res) => {
  try {
    const imageFiles = req.files;
    const { title, body, checkin } = req.body;
    const images = [];
    for (const file of imageFiles) {
      const imgPath = file.path;
      const imgurl = await uploadToCloudinary(imgPath);
      images.push(imgurl);
    }
    const post = new PostModel({
      title,
      body,
      checkin,
      images,
    });
    await post.save();
    return res
      .status(201)
      .json(new successApiResponse(201, 'Post Created', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error!', null));
  }
};

export default createPost;

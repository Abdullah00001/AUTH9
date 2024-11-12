import axiosInstance from '../configs/axiosConfig';

const signupUser = async userData => {
  try {
    return await axiosInstance.post('/user/signup', userData);
  } catch (error) {
    throw error;
  }
};

const verifyEmail = async data => {
  try {
    return await axiosInstance.post('/user/verify', data);
  } catch (error) {
    throw error;
  }
};

const checkAuth = async () => {
  try {
    return await axiosInstance.get('/user/isauthenticated');
  } catch (error) {
    throw error;
  }
};

const RefreshTokens=async()=>{
  try {
    
  } catch (error) {
    throw error
  }
}

export { signupUser, verifyEmail, checkAuth };

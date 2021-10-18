import axios from 'axios';

const handleGoogleLogin = async (response, successCallback, errCallback) => {
  try {
    const { tokenId } = response;
    await axios.post('http://192.168.108.37:4000/api/v1/login/google', { tokenId });
    successCallback();
  } catch (err) {
    errCallback();
  }
};

export default handleGoogleLogin;

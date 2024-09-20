import { setAccessToken } from '@/features/user/redux/auth/userAuthSlice.js';
import { publicRequest, userRequest } from '../userAxios.js';

// Sign up new user
export const signUp = async (userInfo) => {

  console.log(userInfo,'USERRRRRR 11111');
  try {
    const res = await publicRequest.post('/api/user/auth/signup', userInfo, );
    return res.data;
  } catch (error) {
    console.error('Sign-up error:', error.response);
    throw error;
  }
};

// Login user
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (userInfo, dispatch) => {
  try {
    const res = await publicRequest.post('/api/user/auth/login', userInfo);
    await delay(1250);
    dispatch(setAccessToken(res.data));
    userRequest.defaults.headers.token = res.data.tokenId;
    return res.data;
  } catch (error) {
    console.error('Login error:', error.response);
    throw error;
  }
};

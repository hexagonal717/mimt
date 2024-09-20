import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const publicRequest = axios.create({
  baseURL: baseUrl,
});

let token = null;

if (localStorage.getItem('persist:hexagonal717-mimt')) {
  const data = JSON.parse(localStorage.getItem('persist:hexagonal717-mimt'));
  const userAuthSlice = JSON.parse(data.userAuthSlice);
  if (userAuthSlice && userAuthSlice.accessToken) {
    token = userAuthSlice.accessToken.tokenId;
  }
}

export const userRequest = axios.create({
  baseURL: baseUrl,
});

if (token) {
  userRequest.defaults.headers.token = token;
}

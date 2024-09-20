import {  userRequest } from '../userAxios.js';

// Get user info
export const getUser = async (customerId) => {
  try {
    const res = await userRequest.get(
      `/api/customer/profile/get-user/${customerId}`,
    );

    return res.data;
  } catch (error) {
    console.error('Get user info error:', error.response);
    throw error;
  }
};

// Delete user info by ID
export const deleteUser = async (userId) => {
  try {
    const res = await userRequest.delete(`/api/user/delete-user/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Delete user info error:', error.response);
    throw error;
  }
};

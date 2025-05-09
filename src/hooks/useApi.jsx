

// src/hooks/useApi.js
import axios from '../api/axios';

const useApi = () => {
  const getData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const postData = async (url, data) => {
    const response = await axios.post(url, data);
    return response.data;
  };

  const updateData = async (url, data) => {
    const response = await axios.patch(url, data);
    return response.data;
  };

  const deleteData = async (url) => {
    const response = await axios.delete(url);
    return response.data;
  };

  return { getData, postData, updateData, deleteData };
};

export default useApi;

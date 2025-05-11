// src/api/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://testaoron.limsa.uz/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

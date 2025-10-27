// src/js/pixabay-api.js
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '52901396-de7aac391364669bcd79cab11'; 


const DEFAULT_PARAMS = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 20, 
};

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: { q: query, ...DEFAULT_PARAMS },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

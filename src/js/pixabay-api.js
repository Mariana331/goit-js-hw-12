import axios from 'axios';

export function getImagesByQuery(query) {
  const Base_URL = 'https://pixabay.com/api/';
  const API_KEY = '50282813-8cc06f543c0e53ea72b225e01';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${Base_URL}?${params}`;
  return axios
    .get(url)
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}

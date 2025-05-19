import axios from 'axios';

export async function getImagesByQuery(query, page = 1, perPage = 15) {
  const Base_URL = 'https://pixabay.com/api/';
  const API_KEY = '50282813-8cc06f543c0e53ea72b225e01';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });
  const url = `${Base_URL}?${params}`;
  const response = await axios.get(url);
  return response.data;
}

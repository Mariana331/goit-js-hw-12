import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-function.js';

const form = document.querySelector('.form');
const input = form.querySelector('input');
const btn = document.querySelector('.btn');

let currentQuery = '';
let currentPage = 1;
const perPage = 15;
let totalPages = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    return iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  await loadImages();
  form.reset();
});

btn.addEventListener('click', async () => {
  currentPage++;
  await loadImages(true);
});

async function loadImages(isLoadMore = false) {
  showLoader();
  btn.disabled = true;

  try {
    const data = await getImagesByQuery(currentQuery, currentPage, perPage);

    if (!data.hits.length) {
      hideLoadMoreButton();
      return iziToast.error({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query.',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    }

    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / perPage);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: 'End',
        message: "You've reached the end of search results.",
        backgroundColor: '#4CAF50',
        position: 'topRight',
      });
    }

    if (isLoadMore) {
      const { height } = document
        .querySelector('.gallery-item')
        .getBoundingClientRect();
      window.scrollBy({ top: height * 2, behavior: 'smooth' });
    }
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images.',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    hideLoadMoreButton();
  } finally {
    hideLoader();
    btn.disabled = false;
  }
}

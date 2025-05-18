//
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-function.js';

const form = document.querySelector('.form');
const input = form.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  // Якщо інпут порожній, показуємо повідомлення і зупиняємо подальше виконання
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      backgroundColor: ' #ef4040',
      position: 'topRight',
    });
    return; // Зупиняємо виконання події
  }

  showLoader(); // Показуємо лоадер
  clearGallery(); // Очищаємо галерею перед новим запитом

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          position: 'topRight',
          backgroundColor: ' #ef4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return; // Якщо немає зображень, зупиняємо подальшу обробку
      }

      createGallery(data.hits); // Якщо зображення є, додаємо їх до галереї
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching the images. Please try again later.',
        position: 'topRight',
        backgroundColor: ' #ef4040',
      });
    })
    .finally(() => {
      hideLoader(); // Приховуємо лоадер після виконання
      form.reset(); // Очищаємо форму після завершення
    });
});

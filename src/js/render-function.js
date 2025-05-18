import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(`.gallery`);
const loader = document.querySelector('#loader');

const newLightBox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// розмітка
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
     class="gallery-image"       src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="info-image">
  <div class="info-box">
  <h4 class=info-item>likes</h4>
  <p class=info-text>${likes}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>views</h4>
  <p class=info-text>${views}</p>
  </div>
  <div class="info-box">
   <h4 class=info-item>comments</h4>
  <p class=info-text>${comments}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>downloads</h4>
  <p class=info-text>${downloads}</p>
   </div>
   </div>
</li>`;
      }
    )
    .join(`\n`);

  gallery.insertAdjacentHTML(`beforeend`, markup);

  newLightBox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

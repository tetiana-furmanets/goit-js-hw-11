// src/js/render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader-wrapper'); // елемент лоадера в HTML

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(img => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;

      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b>${likes}</p>
          <p class="info-item"><b>Views:</b>${views}</p>
          <p class="info-item"><b>Comments:</b>${comments}</p>
          <p class="info-item"><b>Downloads:</b>${downloads}</p>
        </div>
      </li>
      `;
    })
    .join('');

  galleryRef.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryRef.innerHTML = '';
}

export function showLoader() {
  if (loaderRef) loaderRef.classList.add('is-visible');
}

export function hideLoader() {
  if (loaderRef) loaderRef.classList.remove('is-visible');
}

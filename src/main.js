// src/js/main.js
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const PER_PAGE = 40; 

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();

  const input = form.elements['search-text'];
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a search query' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    // data: { total, totalHits, hits: [...] }
    const { hits, totalHits } = data;

    if (!hits || hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader();
      return;
    }

 
    createGallery(hits);

    iziToast.success({
      title: 'Found',
      message: `Found ${totalHits} images. Showing ${hits.length} results.`,
    });
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong when fetching images. Please try again later.',
    });
  } finally {
    hideLoader();
  }
}






import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items.map(({preview, original, description}) => {
      return `
           <div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}',
      data-source='${original}',
      alt='${description}'
    />
  </a>
</div >  ` ;
    }).join('');
};
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});



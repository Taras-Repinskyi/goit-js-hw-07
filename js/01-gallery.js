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
galleryContainer.addEventListener('click',onGalleryContainerClick);

function onGalleryContainerClick(evt) { 
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const modalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${modalImg}" alt="" width="800" height="600">`, {
    onShow: instance => {
      window.addEventListener('keydown', onModalKeyDown);
    },
    onClose: instance => {
      window.removeEventListener('keydown', onModalKeyDown);
    },
  });
  instance.show();
  
  function onModalKeyDown(evt) {
    if (evt.key === 'Escape') {
      instance.close();
     return;
    }
  };
  };

console.log(galleryItems);
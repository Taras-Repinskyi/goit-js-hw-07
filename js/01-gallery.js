import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createGalleryMarkup(items));
function createGalleryMarkup(items) {
    const markup = items.map(({preview, oripginal, description}) => {
        return'
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div >';
}).join('');
}





console.log(galleryItems);
    

    vdfvd
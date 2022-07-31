import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) { 

const galleryHtml = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</div>`

    gallery.innerHTML += galleryHtml;
    
}


   


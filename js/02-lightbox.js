import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) { 

    const galleryHtml = `<a class="gallery__item" href="${galleryItems[i].original}">
  <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
</a>`
   
    gallery.innerHTML += galleryHtml;

}

new SimpleLightbox(".gallery a", { captionDelay: 250 });
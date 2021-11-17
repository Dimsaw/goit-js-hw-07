import { galleryItems } from "./gallery-items.js";
// Change code below this line

const allPhotos = document.querySelector(".gallery");
const galleryPhotos = createPhotosGalerry(galleryItems);

allPhotos.insertAdjacentHTML("afterbegin", galleryPhotos);

function createPhotosGalerry(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
</li>
        `;
    })
    .join("");
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);

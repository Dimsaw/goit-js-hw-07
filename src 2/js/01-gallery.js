import { galleryItems } from "./gallery-items.js";

const allPhotos = document.querySelector(".gallery");
const galleryPhotos = createPhotosGalerry(galleryItems);

allPhotos.insertAdjacentHTML("afterbegin", galleryPhotos);
allPhotos.addEventListener("click", clickOnPhoto);

function createPhotosGalerry(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    })
    .join("");
}

console.log(galleryItems);

function clickOnPhoto(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return console.log("это не фото");
  }

  const url = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${url}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
        function onEscPress(event) {
          const ESC_KEY_CODE = "Escape";
          if (event.code === ESC_KEY_CODE) {
            instance.close();
          }
        }
      },
    }
  );

  console.log("клик");
  instance.show();
}

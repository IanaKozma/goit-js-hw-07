import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const imgsGallery = createImgsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgsGallery);

galleryContainer.addEventListener("click", instance);

function createImgsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" 
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        })
        .join("");
}

const instance = basicLightbox.create(`
		<img src = ${e.target.dataset.source}>`,
    e.preventDefault(),
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
).show();

const closeModal = e => {
  if (e.code === "Escape") {
    instance.close();
  }
};
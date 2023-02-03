import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const imgsGallery = createImgsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgsGallery);

galleryContainer.addEventListener("click", onClickHandler);

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

function onClickHandler(e) {
    e.preventDefault()
  const closeModal = e => {
  if (e.code === "Escape") {
    instance.close();
  }};

  const instance = basicLightbox.create(`
    <img src = ${e.target.dataset.source}>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  )
    instance.show();
}
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const imgsGallery = createImgsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgsGallery);

galleryContainer.addEventListener("click", onGalleryItemClick);

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

function onGalleryItemClick(e) {
  e.preventDefault();

  basicLightbox.create(`
		<img src = ${e.target.dataset.source}>
	`).show()
}

window.addEventListener('keypress', (e) => {
  if (e.key === "Escape") basicLightbox.close()
})
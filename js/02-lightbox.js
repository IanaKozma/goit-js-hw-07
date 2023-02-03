import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const imgsGallery = createImgsGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgsGallery);

galleryContainer.addEventListener("click", onClickHandler);

function createImgsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" 
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a>`;
        })
        .join("");
}

function onClickHandler(e) {
    e.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoomFactor: false,
    });
}
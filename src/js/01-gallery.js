// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createMarkup = array => 
    array.map(item => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
            </a>
        </li>`;
    }).join('');

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const options = {
    captionsData: 'alt',
    captionDelay: 500,
    overlayOpacity: 0.9,
}

new SimpleLightbox('.gallery__link',options);
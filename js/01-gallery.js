import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryblock = document.querySelector('.gallery');
const itemsGallery = galleryItemsMarkup(galleryItems);
galleryblock.insertAdjacentHTML('beforeend', itemsGallery);
galleryblock.addEventListener('click', onImgClick);


function galleryItemsMarkup(items) {
   return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
               <a class="gallery__link" href="${original}">
                  <img
                     class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                  />
               </a>
            </li>`;
   })
      .join('');
}

const instance = basicLightbox.create(
   `
<img width="1280" height="auto" src="">`,
   {
      onShow: (instance) => {
         document.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
         document.removeEventListener('keydown', onEscKeyPress);
      },
   }
);

function onImgClick(e) {
   e.preventDefault();
   const datasetSource = e.target.dataset.source;
   if (!datasetSource) return;
   instance.element().querySelector('img').src = datasetSource;
   instance.show();
}

function onEscKeyPress(e) {
   if (e.code !== 'Escape') return;
   instance.close();
}


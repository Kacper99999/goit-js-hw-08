// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");


function createImages(){
  for(let i = 0; i < galleryItems.length; i++){
      //Create list elements------------------------------
      const liTag = document.createElement("li");
      liTag.classList.add("gallery__item");

      //Create link elements------------------------------
      const linkTag = document.createElement("a");
      linkTag.classList.add("gallery__link");
      linkTag.href = galleryItems[i].original;

      //Create img elements------------------------------
      const imageTag = document.createElement("img");
      imageTag.classList.add("gallery__image");
      imageTag.src = galleryItems[i].preview;
      imageTag.alt = galleryItems[i].description;

      //Including HTML---------------------------------------------------
      gallery.appendChild(liTag);
      liTag.appendChild(linkTag);
      linkTag.appendChild(imageTag);

}
};


let lightbox = null;

function selectImage(event){
  event.preventDefault();
  if(!lightbox){
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true, 
      captionType: 'attr', 
      captionDelay: 250, 
      captionsData: 'alt' 
  });
 }
};

createImages();


gallery.addEventListener("click", selectImage);
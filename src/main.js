import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import octagon from './img/octagon.svg';
import closeButton from './img/close_button.svg';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const button = document.querySelector('.form-button');
const galleryContainer = document.querySelector('.gallery-container');
const loader = document.querySelector('.loader');
const searchParams = new URLSearchParams({
  key: '42207525-2f984868f7881b9b68563ca8c',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});
const gallery = new SimpleLightbox('.gallery-link');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.classList.add('is-visible');
  galleryContainer.innerHTML = '';
  searchParams.set('q', input.value);
  pixabayRequest()
    .then(images => {
      if (images.hits.length) {
        loader.classList.remove('is-visible');
        galleryContainer.innerHTML = createMarkup(images.hits);
        gallery.refresh();
      } else {
        createPopUp();
      }
    })
    .catch(error => console.log(error));
  form.reset();
});

function pixabayRequest() {
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      item =>
        `<li class='gallery-item'><a class='gallery-link' href=${item.largeImageURL}><img class='gallery-img' src=${item.webformatURL} width='360' height='200' alt=${item.tags}><span class="img-loader"></span></a><ul class='desc-wrapper'><li class='desc-text'><h3>Likes</h3><p>${item.likes}</p></li><li class='desc-text'><h3>Views</h3><p>${item.views}</p></li><li class='desc-text'><h3>Comments</h3><p>${item.comments}</p></li><li class='desc-text'><h3>Downloads</h3><p>${item.downloads}</p></li></ul></li>`
    )
    .join('');
}

function createPopUp() {
  iziToast.show({
    class: 'my-iziToast',
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    messageSize: 16,
    messageLineHeight: '24',
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
    position: 'topRight',
    iconUrl: octagon,
    progressBarColor: '#B51B1B;',
    close: false,
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    buttons: [
      [
        `<button type="button" style="background-color: #EF4040; padding-top: 15px; padding-bottom: 15px"><img src=${closeButton}></button>`,
        function (instance, toast) {
          instance.hide({ transitionOut: 'fadeOutRight' }, toast);
        },
      ],
    ],
    onOpening() {
      galleryContainer.innerHTML = '';
      loader.classList.remove('is-visible');
      input.addEventListener('input', () =>
        document.querySelector('.my-iziToast').classList.add('close-iziToast')
      );
    },
  });
}

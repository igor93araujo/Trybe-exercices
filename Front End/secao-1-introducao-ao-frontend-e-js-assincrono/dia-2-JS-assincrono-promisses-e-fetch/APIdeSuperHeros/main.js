import Swal from 'sweetalert2';
import './style.css';

const getImg = document.querySelector('#image');
const getParag = document.querySelector('#name');
const getBtn = document.querySelector('#button');


getBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const randomId = () => Math.floor(Math.random() * 1000);
  const id = randomId();
  fetch(`https://www.superheroapi.com/api.php/5696894973665794/${id}`)
    .then((response) => response.json())
    .then((data) => {
      getImg.src = data.image.url;
      getParag.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
})
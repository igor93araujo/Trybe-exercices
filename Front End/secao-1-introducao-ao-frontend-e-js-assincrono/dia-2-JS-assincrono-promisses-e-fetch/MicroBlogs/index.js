import './style.css';


import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    fillUsersSelect(data.users);
    console.log(data.users)
  });
  
console.log(usersSelect);
usersSelect.eventListener('change', () => {
  clearPageData();
  userID = 
  fetch(`https://dummyjson.com/posts/user/${userID}`)

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});

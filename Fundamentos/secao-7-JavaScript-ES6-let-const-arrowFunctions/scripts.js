
const button = document.getElementById('click');
const button2 = document.getElementById('click2');
const getDiv = document.getElementById('number');
let n = 0;

button.addEventListener('click', () => {
   n += 1 ;
  getDiv.innerHTML = n;
});

button2.addEventListener('click', () => {
  n -= 1; 
  getDiv.innerHTML = n;
})


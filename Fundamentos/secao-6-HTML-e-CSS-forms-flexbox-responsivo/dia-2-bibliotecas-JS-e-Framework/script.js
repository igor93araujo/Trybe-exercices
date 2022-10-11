   let check2 = document.getElementById('concordo2');
  
  let sendButton = document.getElementById('enviar'); //botao enviar
  sendButton.disabled = true;
  sendButton.style.opacity = '50%';
  
  check2.addEventListener('click', () => { //função para habilitar botao com click
    if (sendButton.disabled === true) {
      sendButton.disabled = false;
      sendButton.style.opacity = '100%';
    } else {
      sendButton.disabled = true;
      sendButton.style.opacity = '50%';
    }
  })
  
  
  sendButton.addEventListener('click', (verifyData));
  
  function verifyData(){
    const nameSize = document.getElementById('nome').value.length;
    const emailSize = document.getElementById('email').value.length;
    const textAreaSize = document.getElementById('textarea').value.length;
    if(nameSize<10 || nameSize>40 || emailSize <10 || emailSize>50 || textAreaSize>500){
      alert('Dados Inválidos')
    } else{
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }
  verifyData(); 
  















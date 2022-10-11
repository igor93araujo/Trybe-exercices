let check2 = document.getElementById('concordo2');

const sendButton = document.getElementById('enviar'); //botao enviar
/* sendButton.addEventListener('click', verifyAcess); */ //evento de click no botao

function cancelSendButton(event){ //função de preventDefault
  event.preventDefault();
}


/* function verifyAcess(){ //função para verificar acesso
  if(check2.checked == false){
    cancelSendButton() //preventDefault
    alert('Seu formulário só será enviado se concordar com a opção 2')
    console.log('clicou')
  } 
}
verifyAcess( */
sendButton.addEventListener('click', verifyData);

/* function verifyData(){
  const nameSize = document.getElementById('nome').value.length;
  const emailSize = document.getElementById('email').value.length;
  const textAreaSize = document.getElementById('textarea').value.length;
  if(nameSize<10 || nameSize>40 || emailSize <10 || emailSize>50 || textAreaSize>500){
    alert('Dados Inválidos')
  } else{
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
verifyData(); */
 











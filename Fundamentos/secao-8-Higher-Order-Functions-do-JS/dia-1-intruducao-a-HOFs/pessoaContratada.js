const newEmployees = (createData) => {
  const employees = {
    id1: createData('Igor Barbosa'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createData('Dora Barbosa'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createData('Aline Barbosa'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createData = (nomeCompleto) => {
  const getEmail = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email:`${getEmail}@trybe.com`};
}

console.log(newEmployees(createData));




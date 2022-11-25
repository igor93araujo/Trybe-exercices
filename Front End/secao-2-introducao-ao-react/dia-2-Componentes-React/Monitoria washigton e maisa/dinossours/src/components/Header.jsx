import React from 'react';
import '../App.css'

const dinos = [
  {
    "Name": "Aardonyx",
    "Description": "An early stage in the evolution of sauropods."
  },
  {
    "Name": "Abelisaurus",
    "Description": "\"Abel's lizard\" has been reconstructed from a single skull."
  },
  {
    "Name": "Abrictosaurus",
    "Description": "An early relative of Heterodontosaurus."
  },
  {
    "Name": "Abrosaurus",
    "Description": "A close Asian relative of Camarasaurus."
  },
  {
    "Name": "Abydosaurus",
    "Description": "This sauropod's intact skull was discovered in 2010."
  },
  {
    "Name": "Acanthopholis",
    "Description": "No, it's not a city in Greece."
  },
  {
    "Name": "Achelousaurus",
    "Description": "Might this have been a growth stage of Pachyrhinosaurus?"
  },
  {
    "Name": "Achillobator",
    "Description": "This fierce raptor was discovered in modern-day Mongolia."
  }]

class Header extends React.Component {
  render() {

    return (
      <header className='App-header'>
        <ul>
        {
          dinos.map((dino) => (
            <li key={dino.Name} className = 'liHeader'> { dino.Name } </li>
          ))
        }
        </ul>
      </header>
    );
  }
}

export default Header;
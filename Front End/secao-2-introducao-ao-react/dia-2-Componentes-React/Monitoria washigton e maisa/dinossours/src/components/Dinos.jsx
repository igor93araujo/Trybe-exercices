import React from 'react';
import '../App.css'


const dinos20 = [
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
  },
  {
    "Name": "Acristavus",
    "Description": "This early hadrosaur lacked any ornamentation on its skull."
  },
  {
    "Name": "Acrocanthosaurus",
    "Description": "The largest meat-eating dinosaur of the early Cretaceous period."
  },
  {
    "Name": "Acrotholus",
    "Description": "North America's earliest bone-headed dinosaur."
  },
  {
    "Name": "Adamantisaurus",
    "Description": "This titanosaur was named 50 years after its discovery."
  },
  {
    "Name": "Adasaurus",
    "Description": "This raptor's hind claws were unusually small."
  },
  {
    "Name": "Adeopapposaurus",
    "Description": "A close relative of Massospondylus."
  },
  {
    "Name": "Aegyptosaurus",
    "Description": "Try and guess which country this dinosaur was found in."
  },
  {
    "Name": "Aeolosaurus",
    "Description": "Could this titanosaur have reared up on its hind legs?"
  },
  {
    "Name": "Aerosteon",
    "Description": "This air-boned dinosaur may have breathed like a bird."
  },
  {
    "Name": "Afrovenator",
    "Description": "One of the few carnivores ever to be dug up in northern Africa."
  },
  {
    "Name": "Agathaumas",
    "Description": "The first ceratopsian dinosaur ever discovered."
  },
  {
    "Name": "Agilisaurus",
    "Description": "This \"agile lizard\" was one of the earliest ornithopods."
  }]

class Dinos extends React.Component {

  render() {
    return (
      <div>
        <ol>
        {
          dinos20.map((dino) => (
            <li key={dino.Name}>
              <p>{ dino.Name }</p>
              <p>{ dino.Description }</p>
            </li>
          ))
        }
        </ol>
      </div>
    )
  }
  }

  export default Dinos;
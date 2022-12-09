import React from 'react';
import Loading from './Loading';

class User extends React.Component {

      constructor(props){
        super(props);
        this.state = {
          people: [],
          loading: true,
        }
      }

      componentDidMount(){
        fetch('https://api.randomuser.me/')
        .then(response => response.json())
        .then(data => {
          this.setState({
            people: data.results,
            loading: false,
          })
        })
      }

      shouldComponentUpdate(_nextProps, nextState) {
        const age = 50;
        if(nextState.people[0].dob.age < age) return true;
      }
      
      render() {
        const { loading, people } = this.state;
        if (loading) return <Loading />
          return (
            <section>
              {people.map((person) => {
                return (
                  <div>
                    <img src={person.picture.thumbnail} alt={person.name.first} />
                    <h1>{`${person.name.first} ${person.name.last}`}</h1>
                    <p>{person.email}</p>
                    <p>{person.dob.age}</p>
                  </div>
                )
              })
              }
            </section>
          )
        }
  }
export default User;
import React from 'react';
import '../App.css'

class MyForm extends React.Component {

  constructor () {
    super ();

    this.handleName = this.handleName.bind(this);
 
    this.state = {
      nameState: '',
    }
  }


  handleName(event) {
    this.setState({
      nameState: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Select:
            <select>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </select>
          </label>
          <label>
            Inputs:
            <input
              type="text"
              name="name"
              id="name"
              placeholder='name'
              value={this.state.nameState}
              onChange={this.handleName} />
            <input type="email" name="email" id="" placeholder='email' />
          </label>
          <label >
            Text Area:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div >
    )
  }
}
export default MyForm;
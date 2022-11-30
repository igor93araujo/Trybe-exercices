import React from 'react';
import '../App.css'

class MyForm extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectState: '',
      nameState: '',
      emailState: '',
      textAreaState: '',
      checkboxState: false,
    }
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // Exclusivamente no checkbox precisa fazer essa validação acima:

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <fieldset className='formulario'>
        <legend>Meu formulário</legend>
        <form>
          <label>
            Select:
            <select
              name='selectState'
              value={ this.state.selectState }
              onChange={ this.handleChange }
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </label>
          <label>
            Inputs:
            <input
              type="text"
              name="nameState"
              placeholder='name'
              value={ this.state.nameState}
              onChange={this.handleChange} />
            <input
            type="email"
            name="emailState"
            placeholder='email'
            value={ this.state.emailState}
            onChange={ this.handleChange }
            />
          </label>
          <label >
            Text Area:
            <textarea
            type="text"
            name="textAreaState"
            value={ this.state.textAreaState }
            onChange={ this.handleChange }></textarea>
          </label>
          <label>
            Concorda com os termos?
            <input type="checkbox" name="checkboxState" id=""
            value={ this.state.checkboxState}
            onChange={this.handleChange}/>
          </label>
        </form>
      </fieldset >
    )
  }
}
export default MyForm;
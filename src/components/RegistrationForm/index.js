// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    showForm: true,
  }

  checkFirstName = () => {
    const {firstName} = this.state
    if (firstName.length < 1) {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  checkLastName = () => {
    const {lastName} = this.state
    if (lastName.length < 1) {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitAnotherResponse = () => {
    this.setState({showForm: true})
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.checkFirstName()
    this.checkLastName()
    const {firstName, lastName} = this.state
    if (firstName.length > 0 && lastName.length > 0) {
      this.setState({showForm: false})
    }
    this.setState({firstName: '', lastName: ''})
  }

  renderForm = () => {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
    } = this.state
    console.log(showFirstNameError, showLastNameError)
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.onFirstNameChange}
          onBlur={this.checkFirstName}
        />
        <p className="error-msg">{showFirstNameError && '*Required'}</p>
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.onLastNameChange}
          onBlur={this.checkLastName}
        />
        <p className="error-msg">{showLastNameError && '*Required'}</p>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

  renderSubmitResponse = () => {
    console.log('done')
    return (
      <div className="form-response">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.onSubmitAnotherResponse}>
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {showForm} = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div className="card">
          {showForm ? this.renderForm() : this.renderSubmitResponse()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

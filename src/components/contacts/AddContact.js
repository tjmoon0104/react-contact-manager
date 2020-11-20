import React, { Component } from 'react'
import { Consumer } from '../../context'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()

    const { name, email, phone } = this.state

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } })
      return
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } })
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } })
      return
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    }

    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then((res) => dispatch({ type: 'ADD_CONTACT', payload: res.data }))

    this.setState({ name: '', email: '', phone: '', errors: {} })

    this.props.history.push('/')
  }
  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    onChange={this.onChange}
                    value={name}
                    placeholder="Enter Name..."
                    name="name"
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    onChange={this.onChange}
                    value={email}
                    placeholder="Enter Email..."
                    name="email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    onChange={this.onChange}
                    value={phone}
                    placeholder="Enter Phone..."
                    name="phone"
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact

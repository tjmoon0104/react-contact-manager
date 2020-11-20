import React, { Component } from 'react'
import { Consumer } from '../../context'
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const contact = res.data
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (dispatch, e) => {
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

    const updContact = {
      name,
      email,
      phone,
    }

    const { id } = this.props.match.params

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    )

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data })

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
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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

export default EditContact

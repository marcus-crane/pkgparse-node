import React, { Component } from 'react'

class Submission extends Component {
  importPackage(event) {
    // Prevent the default behaviour of the button (sending/refreshing)
    event.preventDefault()
    // Create an object containing the URL entered
    var Package = {
      location : this.refs.packageLocation.value
    }
    // Pass the Package object to the inherited getPackage function
    this.props.getPackage(Package)
    // Reset the packageForm
    this.refs.packageForm.reset()
  }

  render() {
    return (
      <form className="packageSubmit" ref="packageForm" onSubmit={this.importPackage.bind(this)}>
        <input type="text" ref="packageLocation" placeholder="Package URL" />
        <button type="submit">Send Package for processing</button>
      </form>
    )
  }
}

export default Submission

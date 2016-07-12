import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Watson!</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </div>
    )
  }
}

export default Header

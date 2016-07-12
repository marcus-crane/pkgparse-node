import React, { Component } from 'react'
import Header from './Header'
import Submission from './Submission'
import Results from './Results'

class Watson extends Component {
  render() {
    return (
      <div>
        <Header tagline={"Let me search so you don't have to!"} />
        <Submission />
        <Results />
      </div>
    )
  }
}

export default Watson

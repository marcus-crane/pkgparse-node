import React, { Component } from 'react'
var fs = require('fs')

class Results extends Component {
  importPackage() {
    var Package = fs.readFile(__dirname + '../package.json','utf8')
    console.log(Package)
  }

  render() {
    return (
      <div>
        <button onClick={this.importPackage.bind(this)}>Get Package</button>
      </div>
    )
  }
}

export default Results

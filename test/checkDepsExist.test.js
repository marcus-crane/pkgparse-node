const fs = require('fs')
const chai = require('chai')
const expect = chai.expect
const checkDepsExist = require('../lib/helpers/checkDepsExist')
const pkg = require('../package.json')

describe('checkDepsExist', function() {
  it('should return the correct packages in the current package.json', function() {
    const deps = checkDepsExist(pkg)

    expect(deps).to.have.property('size', 8)
    expect([...deps]).to.deep.equal([ 'axios', 'caporal', 'chalk', 'opn', 'chai', 'mocha', 'standard', 'test-console' ])
  }),

  it('should work on any object with dependency keys', function() {
    // Version numbers are ignored (only keys are fetched)
    let fakePackage = {
      dependencies: { "got": 1, "react": 2 },
      devDependencies: { "eslint": 3, "sinon": 4 }
    }

    const deps = checkDepsExist(fakePackage)

    expect(deps).to.have.property('size', 4)
    expect([...deps]).to.deep.equal([ 'got', 'react', 'eslint', 'sinon' ])
  })
})
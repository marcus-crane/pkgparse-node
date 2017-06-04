const chai = require('chai')
const expect = chai.expect
const fetchNPMDeps = require('../lib/helpers/fetchNPMDeps')

describe('fetchNPMDeps', function() {
  it('should return the dependencies of a given NPM module', async function() {
    try {
      const deps = await fetchNPMDeps('chai')
      expect([...deps]).to.deep.equal([ 'assertion-error', 'check-error', 'deep-eql', 'get-func-name', 'pathval', 'type-detect', 'browserify', 'bump-cli', 'istanbul', 'karma', 'karma-firefox-launcher', 'karma-mocha', 'karma-phantomjs-launcher', 'karma-sauce-launcher', 'mocha' ])
    } catch(err) {
      throw err
    }
  })
})
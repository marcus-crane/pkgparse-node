const { deepStrictEqual } = require('assert')
const { fetchDescription, fetchDependencies } = require('../lib/parsePackage')

describe('parsePackage', function () {
  describe('fetchDescription', function () {
    it('should return a description for a JSON object that contains one', function () {
      let pkg = { name: 'uuid', description: 'Simple, fast generation of RFC4122 UUIDS' }
      let expected = fetchDescription(pkg)
      deepStrictEqual(expected, 'Simple, fast generation of RFC4122 UUIDS')
    })

    it('should return a string with the package name if missing a description', function () {
      let pkg = { name: 'empty' }
      let expected = fetchDescription(pkg)
      deepStrictEqual(expected, 'No description available.')
    })
  })

  describe('fetchDependencies', function () {
    it('should return dependencies for a package', function () {
      let pkg = {
        dependencies: { 'pug': 'are', 'express': 'versions', 'react': 'ignored' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['express', 'pug', 'react'])
    })

    it('should return devDependencies for a package', function () {
      let pkg = {
        devDependencies: { 'mocha': '^1.0.0', 'chai': '^2.3.4', 'standard': '^1.2.3' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['chai', 'mocha', 'standard'])
    })

    it('should return both types of dependencies sorted alphabetically', function () {
      let pkg = {
        dependencies: { 'pug': '^1.0.0', 'react': '^1.0.0', 'express': '^1.0.0' },
        devDependencies: { 'mocha': '^1.0.0', 'chai': '^1.0.0', 'standard': '^1.0.0' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['chai', 'express', 'mocha', 'pug', 'react', 'standard'])
    })

    it('should not return duplicate dependencies', function () {
      let pkg = {
        dependencies: { 'pug': '^1.0.0', 'enzyme': '^1.0.0', 'react': '^1.0.0' },
        devDependencies: { 'enzyme': '^1.0.0', 'react': '^1.0.0', 'eslint': '^1.0.0' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['enzyme', 'eslint', 'pug', 'react'])
    })
  })
})

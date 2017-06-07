const { deepStrictEqual } = require('assert')
const { fetchDescription, fetchDependencies } = require('../lib/parsePackage')

describe('parsePackage', function () {
  describe('fetchDescription', function () {
    it('should return the description if package.json has one', function () {
      let pkg = { name: 'uuid', description: 'Simple, fast generation of RFC4122 UUIDS' }
      let expected = fetchDescription(pkg)
      deepStrictEqual(expected, 'Simple, fast generation of RFC4122 UUIDS')
    })

    it('should return an error string if package.json is missing a description', function () {
      let pkg = { name: 'empty' }
      let expected = fetchDescription(pkg)
      deepStrictEqual(expected, 'No description available.')
    })
  })

  describe('fetchDependencies', function () {
    it('should return an empty array if the package has no dependencies at all', function () {
      let pkg = {}
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, [])
    })
    it('should return dependencies in alphabetical order for a package with only deps', function () {
      let pkg = {
        dependencies: { 'pug': 'are', 'express': 'versions', 'react': 'ignored' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['express', 'pug', 'react'])
    })

    it('should return devDependencies in alphabetical order for a package with only devDeps', function () {
      let pkg = {
        devDependencies: { 'mocha': '^1.0.0', 'chai': '^2.3.4', 'standard': '^1.2.3' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['chai', 'mocha', 'standard'])
    })

    it('should return both deps and devDeps sorted alphabetically if a package has both', function () {
      let pkg = {
        dependencies: { 'pug': '^1.0.0', 'react': '^1.0.0', 'express': '^1.0.0' },
        devDependencies: { 'mocha': '^1.0.0', 'chai': '^1.0.0', 'standard': '^1.0.0' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['chai', 'express', 'mocha', 'pug', 'react', 'standard'])
    })

    it('should ignore duplicates if a dependency is listed as both a dep and devDep', function () {
      let pkg = {
        dependencies: { 'pug': '^1.0.0', 'enzyme': '^1.0.0', 'react': '^1.0.0' },
        devDependencies: { 'enzyme': '^1.0.0', 'react': '^1.0.0', 'eslint': '^1.0.0' }
      }
      let expected = fetchDependencies(pkg)
      deepStrictEqual(expected, ['enzyme', 'eslint', 'pug', 'react'])
    })
  })
})

const assert = require('assert');
const search = require('../lib/testableSearch.js');



describe('Array', function() {
    describe('#search', function() {
        it(`should return a valid NPM JSON object`, async function() {
            this.timeout(30000);
            let npm = await search.testable("npm");
            assert.equal(npm.name, "npm");
        });
    });
});
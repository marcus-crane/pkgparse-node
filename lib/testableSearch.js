const axios = require('axios');

module.exports = {
    testable: async(moduleName) => {
        const res = await axios.get(`https://registry.npmjs.org/${moduleName}`);
        return res.data;
    }
};
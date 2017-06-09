const { get } = require('https')

const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = get(url, (res) => {
      if (res.statusCode === 404) {
        resolve(404)
      } else if (res.statusCode !== 200) {
        reject(new Error(`Something went wrong: ${res.statusCode}`))
      }

      const body = []
      res.on('data', (chunk) => body.push(chunk))
      res.on('end', () => resolve(JSON.parse(body.join(''))))
    })

    req.on('error', (err) => {
      console.log('oh', err)
      reject(err)
    })
  })
}

module.exports = request

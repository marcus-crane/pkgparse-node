const logDescription = (description) => {
  if (description.includes('has no description')) {
    console.log(`red:${description}`)
  } else {
    console.log(`green:${description}`)
  }
}

module.exports = {
  logDescription
}

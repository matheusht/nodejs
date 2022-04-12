const getFlagValue = require('./flags')

console.log(`ola ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

console.log(getFlagValue)
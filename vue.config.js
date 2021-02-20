const path = require('path')
const { vueRollLoop } = require('./src/lib')
console.log(vueRollLoop)
module.exports = {
    plugins: [
      new vueRollLoop()
    ]
  }
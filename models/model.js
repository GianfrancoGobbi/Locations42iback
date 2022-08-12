'use strict'

let locations = require('./infolocation.json')
let arraylocations = locations

module.exports = {
  listlocations: function () {
    return arraylocations
  },
  addlocations: function (name, type, center) {
    let crearlocation = {
      type: type,
      name: name,
      center: center,
    }
    arraylocations.push(crearlocation)
    return 'location creada correctamente'
  }
}



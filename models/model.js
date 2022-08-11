'use strict'

let locations =  require('./infolocation.json')

module.exports = {
  listlocations: function () {
      return locations
  },
}
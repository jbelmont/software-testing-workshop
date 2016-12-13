'use strict'

const Puppy = function (options) {
  this.name = options.name
  this.color = options.color
  this.isChasingBall = false
}

Puppy.prototype = {
  'callByName': function (name) {
    if (name.toLowerCase() === this.name.toLowerCase()) {
      return 'ok'
    } else {
      return 'nope'
    }
  },
  'speak': function () {
    return 'woof'
  },
  'feed': function (type) {
    switch (type) {
      case 'beef':
        return 'yummy!'
      case 'chicken':
        return 'mmmm'
      default:
        return 'yuck'
    }
  }
}

module.exports = Puppy
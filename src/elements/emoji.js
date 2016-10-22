const html = require('choo/html')
const emoji = require('node-emoji')

module.exports = function(name) {
  return html`${emoji.get(name)}`
}

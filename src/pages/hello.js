const html = require('choo/html')
const nav = require('../elements/nav')
const emoji = require('node-emoji')

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
    ${nav(state, prev, send)}
    <h1>Hello, World! ${emoji.get('rocket')}</h1>
    </div>
  </main>
`

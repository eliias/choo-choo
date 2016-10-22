const html = require('choo/html')
const nav = require('../elements/nav')
const emoji = require('../elements/emoji')
const danger = require('../elements/danger')

module.exports = (state, prev, send) => html`
  <main class="clearfix mxn2">
    <div class="col-10 px2 mx-auto">
      ${nav(state, prev, send)}
      <h1>${state.title}</h1>
      <button onclick=${e => send('addWagon', ':train:')}>Wagon hinzufügen</button>
      <button onclick=${e => send('parkWagons')}>Wagons parken</button>
      <h2>Rangierbahnhof</h2>
      <div class="wagons">
        ${state.wagons.map(name=> emoji(name))}
      </div>
      ${danger(state, prev, send)}
      <h2>Freie Wagen</h2>
      <div class="wagons">
        ${state.free.map(name=> emoji(name))}
      </div>
    </div>
  </main>
`

const html = require('choo/html')

module.exports = (state, prev, send) => {
  if (state.wagons.length > 10) {
    return html`<span class="danger">Tom ist nicht so stark, du musst Wagons parken</span>`
  }
}

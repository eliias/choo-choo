const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <nav>
      <a href="/">Tom</a>
      <a href="/hello">Hello, World!</a>
    </nav>
  `
}

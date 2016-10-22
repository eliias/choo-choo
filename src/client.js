const log = require('choo-log')
const choo = require('choo')
require('./styles')

const app = choo()

app.use(log())

app.model({
  state: {
    title: 'Thomas, die kleine Lokomotive',
    wagons: [],
    free: []
  },
  reducers: {
    addWagon: (data, state) => {
      if (state.wagons.length === 0) {
        data = ':steam_locomotive:'
      }
      const wagons = [...state.wagons, data]
      return Object.assign(state, {wagons})
    },
    parkWagons: (data, state) => {
      const s = Object.assign(state)
      if (state.wagons.length > 10) {
        s.free = [...state.free, ...state.wagons.slice(10)]
        s.wagons = state.wagons.slice(0, 10)
      }
      return s
    }
  }
})

app.router(route => [
  route('/', require('./pages/tom')),
  route('/hello', require('./pages/hello'))
])

function style(src) {
  const el = document.createElement('link')
  el.setAttribute('type', 'text/css')
  el.setAttribute('rel', 'stylesheet')
  el.setAttribute('href', src)
  return el
}
const styles = [
  style('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'),
  style('https://unpkg.com/basscss@8.0.2/css/basscss.min.css')
]

const tree = app.start()

document.body.appendChild(tree)
styles.forEach(style => document.head.appendChild(style))

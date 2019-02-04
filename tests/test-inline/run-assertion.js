const { validate } = require('./src/types/runtime/types/assert')

try {
  validate({ greeting: 1 })
} catch (e) {
  console.log('correctly caught error')
}
validate({ greeting: 'hello' })

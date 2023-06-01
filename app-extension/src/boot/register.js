import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-clear'

export default boot(({ app }) => {
  app.use(VuePlugin)
})

import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'Mycomponent',

  setup () {
    return () => h(QBadge, {
      class: 'Mycomponent',
      label: 'Mycomponent'
    })
  }
}

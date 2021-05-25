import { mount } from '@cypress/vue'
import App from './App.vue'

describe('<App />', () => {
  it('renders the homepage link', () => {
    mount(App)
  })
})

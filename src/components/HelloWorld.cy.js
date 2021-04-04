import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    mount(HelloWorld)
  })
})
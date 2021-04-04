import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

console.log(HelloWorld)
describe('HelloWorld', () => {
  it('renders properly', () => {
    mount(HelloWorld)
  })
})
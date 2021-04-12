import { mount } from '@cypress/vue'
import ExampleBaseButton from './ExampleBaseButton.vue'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('playground', () => {
    mount(ExampleBaseButton)
  })

  it('takes in the default slot', () => {
    mount(BaseButton, { slots: { default: 'Hello' }
    }).get('button').should('have.text', 'Hello')
  })
})
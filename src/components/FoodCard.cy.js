import { h } from 'vue'
import { mount } from '@cypress/vue'
import FoodCard from './FoodCard.vue'

const mountWithMargin = (comp, props = {}) => {
  return mount(() => h('div', { style: 'margin: 10px' }, h(comp, props)))
}

describe('FoodCard', () => {
  it('render a culinary delight', () => {
    const availability = 'Closed. Next delivery 11:30am tomorrow.'
    mountWithMargin(FoodCard, {
      availability,
      restaurant: "Carl's Jr",
      isAvailable: false,
      genre: 'American',
      stars: 3
    })

    cy.get('[data-cy=genre]').contains('American')
    cy.get('[data-cy=restaurant]').contains("Carl's Jr")
    cy.get('[data-cy=stars]').should('have.length', 3)
    cy.get('[data-cy=status]').contains(availability)
  })
})
import { mount } from '@cypress/vue'
import PerksModal from './PerksModal.vue'
import { defineComponent } from 'vue'

const formData = {
  email: 'jessica@cypress.io',
  zipCode: 32084
}

const fillForm = (options, component = PerksModal) => {
  let { visible, email, zipCode } = options
  visible = visible || true
  email = email || ''
  zipCode = zipCode || ''

  return mount(component, { props: { visible } })
    .get('[data-testid=email]')
    .type(email || ' ')
    .get('[data-testid=zip-code]')
    .type(zipCode || ' ')
    .get('form')
}

const checkValidity = function (elements) {
  return Array.from(elements).map(el => el.checkValidity())
}


describe('PerksModal', () => {
  it('renders properly', () => {
    mount(PerksModal, { props: { visible: true } }).get('form').should('be.visible')
  })

  describe('valid submission', () => {
    it('can be filled out', () => {
      fillForm(formData) 
    })

    it('doesnt navigate when the submit button is pressed', () => {
      fillForm(formData)
      .submit()
      .should('not.have.been.called')
    })

    it('emits the form data on submit', () => {
      const stub = cy.stub().as('submit')
      mount(PerksModal, { methods: { submit: stub }})
      fillForm(formData)
        .get('button[type="submit"]')
        .click()
        .vue()
        .should((wrapper) => {
          const emitted = wrapper.emitted('submit') 
          expect(emitted).to.exist.and.have.length(2)
          expect(emitted[0][0].email).to.include(formData.email)
          expect(emitted[0][0].zipCode).to.include(formData.zipCode)
      })
    })
  })

  describe('invalid submission', () => {
    it('prevents submission with invalid email', () => {
      const invalidEmail = 'vue-conf-us-is-awesome.com'

      fillForm({ email: invalidEmail })
        .get('[data-testid=email]')
        .then(checkValidity).should('contain', false)
        .get('input').clear()
        .then(() => {
          return fillForm({ zipCode: '100000000' })
            .get('[data-testid=zip-code]')
            .checkValidity().should('contain', false)
        })
    })
  })

  describe('visibility', () => {
    it('is controlled by the parent', () => {
      mount(PerksModal, { props: { visible: false } })
        .vue()
        .get('form')
        .should('not.exist')
        .vue()
        .then((wrapper) => {
          expect(wrapper.find().exists()).to.be.false
          wrapper.setProps({ visible: true })
        })
        .get('form').should('exist').and('be.visible')
    })
  })

  it.only('Playground', () => {
      const component = {
        template: `
          <button @click="visible = !visible">Toggle the modal</button>
          <PerksModal :visible="visible" />
        `,
        data: () => ({ visible: false }),
        components: { PerksModal },
      }
      mount(component, { global: { stubs: { transition: false }}})
    })
})
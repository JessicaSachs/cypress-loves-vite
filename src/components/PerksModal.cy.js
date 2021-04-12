import { mount } from '@cypress/vue'
import PerksModal from './PerksModal.vue'

const data = {
  email: 'hello@world.com',
  zipCode: '10036'
}

const wrapper = {
  template: `
    <h2>My page</h2>
    <button @click="visible = !visible">Toggle modal</button>
    <PerksModal @save="onSave" @close="visible = false" :visible="visible"/>
    <p>
      {{ formData }}
    </p>
  `,
  data() {
    return {
      visible: false,
      formData: {}
    }
  },
  methods: {
    onSave(newFormData) {
      this.formData = newFormData
    }
  },
  components: { PerksModal }
}

it('Playground', () => {
  mount(wrapper, {
    global: {
      stubs: {
        transition: false
      }
    }
  })
})

it('does not save the form values unless the submit button is clicked', () => {
  mount(PerksModal, { props: { visible: true } })
    .get('[data-testid=email]')
    .type(data.email)
    .get('.x-button')
    .click()
    .vue()
    .then((wrapper) => {
      expect(wrapper.emitted('save')).to.be.undefined
    })
})

it('is not visible when visible is set to false', () => {
  mount(PerksModal, { props: { visible: false } })
    .get('form')
    .should('not.be.visible')
    .get('.overlay')
    .should('not.be.visible')
})

it('is visible when visible is set to true', () => {
  mount(PerksModal, { props: { visible: true } })
    .get('form')
    .should('be.visible')
    .get('.overlay')
    .should('be.visible')
})

it('emits a save event with the form data', () => {
  mount(PerksModal, { props: { visible: true } })
    .get('[data-testid=email]')
    .type(data.email)
    .get('[data-testid=zip-code]')
    .type(data.zipCode)
    .get('button[type=submit]')
    .click()
    .vue()
    .then((wrapper) => {
      const { email, zipCode } = wrapper.emitted('save')[0][0]
      expect(email).to.equal(data.email)
      expect(zipCode).to.equal(data.zipCode)

      expect(wrapper.emitted('submit')).to.have.length(1)
    })
})

it('can be closed with the x button', () => {

})





























// it.only('Playground', () => {
//   const wrapper = {
//     template: `
//       <h2>The web page</h2>
//       <PerksModal :visible="visible" @close="visible = false"/>
//       <button @click="visible = true" >Show/hide modal</button>
//     `,
//     data() {
//       return {
//         visible: true
//       }
//     },
//     components: { PerksModal }
//   }

//   mount(wrapper)
// })


// it('displays the modal when the visible prop is set to true', () => {
//   mount(PerksModal, { props: { visible: true } })
//     .get('form').should('be.visible')
// })

// it('does not display the modal when the visible prop is set to false', () => {
//   mount(PerksModal, { props: { visible: false } })
//     .get('form').should('not.be.visible')
// })
































const formData = {
  email: 'jessica@cypress.io',
  zipCode: '10036'
}



// const wrapper = {
//     template: `
//       <h2>Hello world</h2>
//       <PerksModal :visible="visible"
//         @save="onSubmit" @close="visible = false" />
//       <button class="modal-open" @click="visible = true">Show/Hide modal</button>
//       <p>Data:</p>
//       <p>{{ formData }}</p>
//     `,

//     data() {
//       return {
//         visible: false,
//         formData: {}
//       }
//     },
//     methods: {
//       onSubmit(newFormData) {
//         debugger;
//         this.formData = newFormData
//       }
//     },
//     components: { PerksModal }
// }

// it('Playground', () => {
//   mount(PerksModal, { props: { visible: true }})
// })

// it('closes the modal when the x button is clicked', () => {
//   mount(wrapper).get('.modal-open')
//     .click()
//     .get('.x-button').click()
//     .get('form').should('not.be.visible')
// })


// it('the save event emits the form data entered', () => {
//   mount(PerksModal, { props: { visible: true } })
//     .get('[data-testid=email]')
//     .type(formData.email)
//     .get('[data-testid=zip-code]')
//     .type(formData.zipCode)
//     .get('button[type=submit]').click()
//     .vue()
//     .then((wrapper) => {
//       const value = wrapper.emitted('save')[0][0]
//       expect(value.email).to.equal(formData.email)
//       expect(value.zipCode).to.equal(formData.zipCode)

//       expect(wrapper.emitted('close')).to.have.length(1)
//     })
// })













// it('renders the modal when visible is set to true', () => {
//   mount(PerksModal, { props: { visible: true } })
//     .get('form')
//     .should('be.visible')
// })

// it('should not render the modal when visible is set to false', () => {
//   mount(PerksModal, { props: { visible: false } })
//     .get('form')
//     .should('not.be.visible')
// })



























// const fillForm = (options, component = PerksModal) => {
//   let { visible, email, zipCode } = options
//   visible = visible || true
//   email = email || ''
//   zipCode = zipCode || ''

//   return mount(component, { props: { visible } })
//     .get('[data-testid=email]')
//     .type(email || ' ')
//     .get('[data-testid=zip-code]')
//     .type(zipCode || ' ')
//     .get('form')
// }

// const checkValidity = function (elements) {
//   return Array.from(elements).map(el => el.checkValidity())
// }


// xdescribe('PerksModal', () => {
//   it('renders properly', () => {
//     mount(PerksModal, { props: { visible: true } }).get('form').should('be.visible')
//   })

//   describe('valid submission', () => {
//     it('can be filled out', () => {
//       fillForm(formData)
//     })

//     it('doesnt navigate when the submit button is pressed', () => {
//       fillForm(formData)
//         .submit()
//         .should('not.have.been.called')
//     })

//     it('emits the form data on submit', () => {
//       const stub = cy.stub().as('submit')
//       mount(PerksModal, { methods: { submit: stub } })
//       fillForm(formData)
//         .get('button[type="submit"]')
//         .click()
//         .vue()
//         .should((wrapper) => {
//           const emitted = wrapper.emitted('submit')
//           expect(emitted).to.exist.and.have.length(2)
//           expect(emitted[0][0].email).to.include(formData.email)
//           expect(emitted[0][0].zipCode).to.include(formData.zipCode)
//         })
//     })
//   })

//   describe('invalid submission', () => {
//     it('prevents submission with invalid email', () => {
//       const invalidEmail = 'vue-conf-us-is-awesome.com'

//       fillForm({ email: invalidEmail })
//         .get('[data-testid=email]')
//         .then(checkValidity).should('contain', false)
//         .get('input').clear()
//         .then(() => {
//           return fillForm({ zipCode: '100000000' })
//             .get('[data-testid=zip-code]')
//             .checkValidity().should('contain', false)
//         })
//     })
//   })

//   describe('visibility', () => {
//     it('is controlled by the parent', () => {
//       mount(PerksModal, { props: { visible: false } })
//         .vue()
//         .get('form')
//         .should('not.exist')
//         .vue()
//         .then((wrapper) => {
//           expect(wrapper.find().exists()).to.be.false
//           wrapper.setProps({ visible: true })
//         })
//         .get('form').should('exist').and('be.visible')
//     })
//   })
// })
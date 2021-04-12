import { mount } from '@vue/test-utils'
import PerksModal from './PerksModal.vue'

it('mounts', async () => {
  const wrapper = await mount(PerksModal, { props: { visible: true }})
  expect(wrapper.find('form').isVisible()).toBeTruthy()
})

it('mounts', async () => {
  const wrapper = await mount(PerksModal, { props: { visible: false }})
  expect(wrapper.find('form').isVisible()).toBeFalsy()
  expect(wrapper.element.innerHTML).toMatchSnapshot()
})





























// it('can fill out the form', async () => {
//   // const email = 'jessica@cypress.io'
//   // const zipCode = 10036
//   const wrapper = await mount(PerksModal)
//   // await wrapper.find('[data-testid=email]').setValue(email)
//   // await wrapper.find('[data-testid=zip-code]').setValue(zipCode)
//   // wrapper.find('form').trigger('submit')

//   // const emitted = wrapper.emitted('submit')
//   // expect(emitted).toHaveLength(2)
//   // expect(emitted[0][0].email).toBe(email)
//   // expect(emitted[0][0].zipCode).toBe("" + zipCode)

//   // expect(wrapper.element.innerHTML).toMatchSnapshot()
// })















//     // await wrapper.find('[data-testid=email]').setValue(email)
//   // await wrapper.find('[data-testid=zip-code]').setValue(zipCode)

//   // wrapper.trigger('submit')

//   // await wrapper.find('form').trigger('submit')

  
// // })




















// // const formData = {
// //   email: 'jessica@cypress.io',
// //   zipCode: 32084
// // }

// // const fillForm = async (options, component = PerksModal) => {
// //   const { email, zipCode } = options
// //   const wrapper = await mount(component, { props: { visible: true }})
// //   await wrapper.find('[data-testid=email]').trigger('input', email)
// //   await wrapper.find('[data-testid=zip-code]').trigger('input', zipCode)
// //   return wrapper
// // }

// // describe('PerksModal', () => {
// //   it('renders properly', async () => {
// //     const wrapper = await mount(PerksModal, { props: { visible: true }})
// //     const form = await wrapper.find('form')
// //     expect(form.isVisible()).toBeTruthy()
// //   })

// //   describe('valid submission', () => {
// //     it('can be filled out', async () => {
// //       const wrapper = await fillForm(formData)
// //       expect(wrapper.find('form').isVisible()).toBeTruthy()
// //     })

// //     it('doesnt navigate when the submit button is pressed', async () => {
// //       const spy = jest.fn()
// //       const wrapper = await fillForm(formData)
// //       const form = await wrapper.find('form')
// //       form.submit = spy
// //       await form.trigger('submit')
// //       expect(spy).not.toHaveBeenCalled()
// //     })

// //     it.only('emits the form data on submit', async () => {
// //       const wrapper = await fillForm(formData)
// //       const form = wrapper.find('form')
      

// //       await wrapper.vm.$nextTick()
// //       await button.trigger('click')


// //       const emitted = wrapper.emitted('submit')
// //       // debugger;
// //       // console.log(wrapper.emitted())
// //       // expect(emitted).toHaveLength(2)
// //       // expect(emitted[0][1]).toEqual(expect.objectContaining(formData))
// //     })
// //   })
// // })
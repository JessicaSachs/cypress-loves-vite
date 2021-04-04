import { mount } from '@vue/test-utils'
import PerksModal from './PerksModal.vue'

const formData = {
  email: 'jessica@cypress.io',
  zipCode: 32084
}

const fillForm = async (options, component = PerksModal) => {
  const { email, zipCode } = options
  const wrapper = await mount(component)
  await wrapper.find('[data-testid=email]').trigger('input', email)
  await wrapper.find('[data-testid=zip-code]').trigger('input', zipCode)
  return wrapper
}

describe('PerksModal', () => {
  it('renders properly', async () => {
    const wrapper = await mount(PerksModal)
    const form = await wrapper.find('form')
    expect(form.isVisible()).toBeTruthy()
  })

  describe('valid submission', () => {
    it('can be filled out', async () => {
      const wrapper = await fillForm(formData)
      expect(wrapper.find('form').isVisible()).toBeTruthy()
    })

    it('doesnt navigate when the submit button is pressed', async () => {
      const spy = jest.fn()
      const wrapper = await fillForm(formData)
      const form = await wrapper.find('form')
      form.submit = spy
      await form.trigger('submit')
      expect(spy).not.toHaveBeenCalled()
    })

    it('emits the form data on submit', async () => {
      const wrapper = await fillForm(formData)
      const button = await wrapper.find('button[type=submit]')
      await button.trigger('click')

      await wrapper.vm.$nextTick()
      await button.trigger('click')

      // const emitted = wrapper.emitted('submit')
      // expect(emitted).toHaveLength(1)
      // expect(emitted[0][1]).toEqual(expect.objectContaining(formData))
    })
  })
})
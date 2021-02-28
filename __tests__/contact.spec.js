import { mount } from '@vue/test-utils';
import Contact from '../src/views/Contact.vue';

describe('Contact', () => {
    const wrapper = mount(Contact);
    it('Exists', () => {
        expect(wrapper.exists()).toBe(true)
    });
    it('Uses form element', () => {
        expect(wrapper.find('form')).toBeTruthy();
    });
    it('Doesn\'t exist', () => {
        expect(wrapper).toBeFalsy();
    })
})
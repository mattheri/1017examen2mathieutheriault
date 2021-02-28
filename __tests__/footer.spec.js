import { mount, createLocalVue } from '@vue/test-utils';
import Footer from '../src/components/Footer.vue';

describe('Footer', () => {
    const wrapper = mount(Footer);
    it('Exists', () => {
        expect(wrapper.exists()).toBe(true);
    });
    it('Uses footer element', () => {
        expect(wrapper.find('footer')).toBeTruthy();
    })
    it('Doesn\'t exist', () => {
        expect(wrapper.find('footer')).toBeFalsy();
    })
})
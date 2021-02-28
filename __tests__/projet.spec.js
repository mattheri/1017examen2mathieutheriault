import { mount } from '@vue/test-utils';
import Projet from '../src/components/Projet.vue';

describe('Projet', () => {
    const wrapper = mount(Projet);
    it('Exists', () => {
        expect(wrapper.exists()).toBe(true)
    });
    it('Uses article element', () => {
        expect(wrapper.find('article')).toBeTruthy();
    });
    it('Doesn\'t exist', () => {
        expect(wrapper.find('article')).toBeFalsy();
    })
})
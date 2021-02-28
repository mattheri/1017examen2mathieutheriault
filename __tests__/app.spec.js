import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '../src/App.vue';
import Header from '../src/components/Header.vue';
import Footer from '../src/components/Footer.vue';

describe('App', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const wrapper = shallowMount(App, {
        localVue
    });
    it('has data', () => {
        expect(
            typeof App.data
        ).toBe('function');
    });
    it('exists', () => {
        expect(
            wrapper.vm
        ).toBeTruthy()
    });
    it('Has Header component', () => {
        expect(wrapper.getComponent(Header)).toBeTruthy();
    });
    it('Has Footer component', () => {
        expect(wrapper.getComponent(Footer)).toBeTruthy();
    });
    it('Doesn\'t exist', () => {
        expect(wrapper).toBeFalsy();
    })
});


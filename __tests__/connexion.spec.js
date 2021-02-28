import { mount, createLocalVue } from '@vue/test-utils';
import Connexion from '../src/components/Connexion.vue';
import { translate } from '../src/mixin';

describe('Connexion', () => {
    const localVue = createLocalVue();
    localVue.filter('translate', translate);
    const wrapper = mount(Connexion, {
        localVue,
        data() {
            return {
                isFlipped: true
            }
        }
    });
    it('exists', () => {
        expect(
            wrapper.vm
        ).toBeTruthy()
    });
    it('Should have a section', () => {
        const section = wrapper.find('section');
        expect(section.exists()).toBe(true);
    });
    it('Section should have a class flipped', () => {
        const section = wrapper.find('section');
        expect(section.classes()).toContain('flipped');
    });
    it('Should not have a class flipped', async () => {
        const button = wrapper.find('.signup-btn');
        const section = wrapper.find('section');
        await button.trigger('click');
        expect(section.classes().length).toBeFalsy();
    });
    it('Doesn\'t exist', () => {
        expect(wrapper).toBeFalsy();
    })
})
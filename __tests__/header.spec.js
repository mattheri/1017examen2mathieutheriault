import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import Header from '../src/components/Header.vue';
import { translate } from '../src/mixin';

describe('Header', () => {
    const $data = {
        labels: {
            firstname: "Prénom",
            lastname: "Nom de famille",
            email: "Courriel",
            categories: [
                "Rendez-vous",
                "Informations",
                "Autre"
            ],
            password: "Mot de passe",
            again: "Une 2e fois",
            nav: [
                "Accueil",
                "Projets",
                "Contact"
            ],
            noAccount: "Pas de compte?",
            account: "J'ai un compte",
            login: "Connexion",
            hello: "Bonjour",
            logout: "Déconnexion"
        },
        liens: [
            {
                to: '/',
                text: 'Accueil'
            },
            {
                to: '/projets',
                text: 'Projets'
            },
            {
                to: '/contact',
                text: 'Contact'
            }
        ],
    }
    const localVue = createLocalVue();
    localVue.filter('translate', translate);
    const wrapper = mount(Header, {
        localVue,
        data() {
            return $data
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    })
    it('Exists', () => {
        expect(wrapper.exists()).toBeTruthy()
    });
    it('Has links', () => {
        expect(wrapper.findAllComponents(RouterLinkStub).length).toBeTruthy()
    });
    it('Doesn\'t exist', () => {
        expect(wrapper.find('article')).toBeFalsy();
    })
})
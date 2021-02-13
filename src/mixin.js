import { store } from './store';

const translateMixin = {
    en: {
        firstname: "Firstname",
        lastname: "Lastname",
        email: "Email",
        categories: [
            "Meeting",
            "Informations",
            "Other"
        ],
        password: "Password",
        again: "Again",
        nav: [
            "Home",
            "Projects",
            "Contact"
        ],
        noAccount: "No account?",
        account: "I have an account",
        login: "Log In",
        hello: "Hello",
        logout: "Log Out"
      },
    fr: {
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
    }
}

export const mixin = translateMixin[store.language];

export function translate(value) {
    let key = Object.keys(mixin).find(key => mixin[key] === value);

    // Check if not in nav array
    if (!key) {
        key = mixin['nav'].some(val => val === value) && 'nav';
    }
    // Check if not in categories array
    if (!key) {
        key = mixin['categories'].some(val => val === value) && 'categories';
    }
    return Array.isArray(translateMixin[store.language][key]) ? 
        translateMixin[store.language][key][mixin[key].findIndex(val => val === value)] : 
        translateMixin[store.language][key];
}
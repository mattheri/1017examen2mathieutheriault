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

    // Si aucune clé, vérifie que la clé n'est pas dans l'array nav
    if (!key) {
        // Assigne la clé à l'array "nav" si l'array categories contient bien la valeur
        key = mixin['nav'].some(val => val === value) && 'nav';
    }
    // Si aucune clé, vérifie que la clé n'est pas dans l'array categories
    if (!key) {
        // Assigne la clé à l'array "categories" si l'array categories contient bien la valeur
        key = mixin['categories'].some(val => val === value) && 'categories';
    }

    // Si l'objet translateMixin[store.language][key] est de type array
    return Array.isArray(translateMixin[store.language][key]) ? 
        // Retrouve la valeur dans l'array
        translateMixin[store.language][key][mixin[key].findIndex(val => val === value)] : 
        // Sinon on retourne tout simplement la valeur dans l'objet
        translateMixin[store.language][key];
}
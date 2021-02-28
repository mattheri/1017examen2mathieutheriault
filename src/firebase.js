import firebase from 'firebase/app';
import 'firebase/auth';

export class Firebase {
    constructor() {
        this._init();
    }

    _init() {
        const config = {
            apiKey: "AIzaSyCp4ZTtygV-Xfv0zS9FnqhDHfzCbhs2AQY",
            authDomain: "examen2-460bb.firebaseapp.com",
            projectId: "examen2-460bb",
            storageBucket: "examen2-460bb.appspot.com",
            messagingSenderId: "75109443469",
            appId: "1:75109443469:web:b06b7e6cdd8e359b257fc4"
        }
        
        return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    }

    async auth() {
        return {
            /**
             * Fonction pour enregister un nouvel utilisateur.
             * Si un utilisateur existe déjà, une erreur sera renvoyée.
             * Sinon, l'utilisateur sera créé, puis connecté, puis retourné.
             * @param email String
             * @param password String
             */
            signUp: async (email, password) => {
                return firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            /**
             * Fonction pour connecter un utilisateur existant.
             * Si celui-ci n'existe pas, une erreur sera renvoyée.
             * Si l'utilisateur existe mais le mot de passe n'est pas bon, une erreur sera renvoyée.
             * Sinon, l'utilisateur est connecté puis retourné.
             * @param email String
             * @param password String 
             */
            signIn: async (email, password) => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            },
            /**
             * Propriété qui récupère l'utilisateur de IndexedDB.
             * S'il n'y a pas d'utilisateur, retourne null.
             * Sinon, l'utilisateur est retourné.
             */
            currentUser: firebase.auth().currentUser,
            /**
             * Fonction pour déconnecter un utilisateur.
             * Déconnecte l'utilisateur dans IndexedDB.
             */
            signOut: async () => firebase.auth().signOut(),
            /**
             * Propriété qui retourne tout l'objet firebase.auth().
             */
            auth: firebase.auth()
        }
    }
}
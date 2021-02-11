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
            signUp: async (email, password) => {
                return firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            signIn: async (email, password) => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            },
            currentUser: firebase.auth().currentUser,
            signOut: async () => firebase.auth().signOut(),
            auth: firebase.auth()
        }
    }
}
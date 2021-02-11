<template>
  <main>
      <h1>Bonjour {{ username }}!</h1>
      <Connexion v-show="!username" />
      <button v-on:click="signOutUser($event)" v-show="username">Déconnection</button>
  </main>
</template>

<script>
import Connexion from '../components/Connexion';
import { Firebase } from '../firebase';
export default {
    name: 'Accueil',
    props: ['username'],
    components: {
        Connexion
    },
    methods: {
        signOutUser: async function(event) {
            event.preventDefault();
            const fb = new Firebase();
            const { signOut } = await fb.auth();
            signOut();
        }
    }
}
</script>

<style scoped>
    main {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        perspective: 600px;
    }
    h1 {
        margin-top: 5rem;
        font-size: 64px;
        font-weight: 800;
        color: white;
        text-decoration: underline;
        text-decoration-color: #44170B;
    }
    button {
        width: 215px;
        padding: 1em;
        background-color: #fff;
        border: none;
        box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
        border-radius: 5px;
        transition: background-color 200ms;
        cursor: pointer;
        color: rgb(73, 73, 73);
    }
    button:hover {
        background-color: rgba(255, 255, 255, 0.678);
    }
</style>
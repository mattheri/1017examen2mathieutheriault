<template>
  <div id="app">
    <Header />
    <router-view :username="user.name" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import { Firebase } from './firebase';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      loggedIn: true,
      user: {
        name: '',
        email: ''
      }
    }
  },
  created: async function() {
    const fb = new Firebase();
    const { auth } = await fb.auth();
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const name = user?.displayName ? user?.displayName : user?.email;
        const email = user?.email;
        this.user.name = name;
        this.user.email = email;
      } else {
        this.user.name = '';
        this.user.email = '';
      }
    })
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  html, body, #app {
    width: 100%;
    height: 100vh;
    background-image: url('./assets/bg.jpg');
    background-size: cover;
    font-family: 'Poppins', sans-serif;
  }
</style>

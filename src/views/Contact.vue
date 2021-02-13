<template>
  <section>
    <form>
      <div>
        <input v-model="formData.firstname" v-bind:class="{active: formData.firstname.length > 0}" type="text" id='firstname' />
        <label for='firstname'>{{ labels.firstname | translate }}</label>
      </div>
      <div>
        <input v-model="formData.lastname" v-bind:class="{active: formData.lastname.length > 0}" type="text" id='lastname' />
        <label for='lastname'>{{ labels.lastname | translate }}</label>
      </div>
      <div>
        <input v-model="formData.email" v-bind:class="{active: formData.email.length > 0}" type="email" id='email' />
        <label for='email'>{{ labels.email | translate }}</label>
      </div>
      <div>
        <select v-model="formData.category" id='categories' value=''>
          <option v-for="category in cat" :key="category" :value="category">{{ category | translate }}</option>
        </select>
      </div>
    </form>
  </section>
</template>

<script>
import { store } from '../store'
export default {
  name: 'Contact',
  data: function() {
    return {
      labels: {},
      store: store,
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        category: ''
      },
      cat: [],
    }
  },
  created: function() {
    this.$data.cat = this.$data.labels.categories
  }
}
</script>

<style scoped>
  section {
    height: 87vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    background: rgba( 68, 23, 11, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(100% - 2rem);
    margin-top: 1rem;
  }
  label {
    position: absolute;
    top: 8px;
    transform: translate(.5rem, 0);
    transition: 100ms linear;
    color: #fff;
  }
  .active ~ label, input:focus ~ label {
    transform: translate(0, -1.8rem);
  }
  input, select {
    background: transparent;
    padding: .5em;
    margin-bottom: 2em;
    border: none;
    border-left: 1px solid rgba(255,255,255,0.3);
    border-top: 1px solid rrgba(255,255,255,0.3);
    border-radius: 5px;
    backdrop-filter: blur(15px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  select:focus {
    color: black;
  }
</style>
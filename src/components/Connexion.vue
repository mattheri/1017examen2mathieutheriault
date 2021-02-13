<template>
  <section v-bind:class='{flipped: isFlipped}'>
      <div class='card front'>
        <form v-on:change="isDisabled">
            <div>
            <input v-model="email" v-bind:class="{active: email.length > 0}" type="email" id='email' />
            <label for='email'>{{ labels.email | translate }}</label>
            </div>
            <div>
            <input v-model="password" v-bind:class="{active: password.length > 0}" type="password" id='password' />
            <label for='password'>{{ labels.password | translate }}</label>
            </div>
            <button :disabled='disabled' v-on:click="signInUser($event)">{{ labels.login | translate }}</button>
        </form>
      <button v-on:click='flip' class='signup-btn'>{{ labels.noAccount | translate }}</button>
      </div>
      <div class='card back'>
        <form v-on:change="isDisabled">
            <div>
            <input v-model="emailSignup" v-bind:class="{active: emailSignup.length > 0}" type="email" id='email-signup' />
            <label for='email-signup'>{{ labels.email | translate }}</label>
            </div>
            <div>
            <input v-model="passwordSignup" v-bind:class="{active: passwordSignup.length > 0}" type="password" id='password-signup' />
            <label for='password-signup'>{{ labels.password | translate }}</label>
            </div>
            <div>
            <input v-model="passwordRetype" v-bind:class="{active: passwordRetype.length > 0}" type="password" id='password-signup-retype' />
            <label for='password-signup-retype'>{{ labels.again | translate }}</label>
            </div>
            <button :disabled='disabled' v-on:click="signUpUser">{{ labels.login | translate }}</button>
        </form>
        <button v-on:click='flip' class='signup-btn'>{{ labels.account | translate }}</button>
      </div>
  </section>
</template>

<script>
import { Firebase } from '../firebase';
import { store } from '../store';
export default {
    name: 'Connexion',
    data: function () {
        return {
            labels: {},
            email: '',
            password: '',
            emailSignup: '',
            passwordSignup: '',
            passwordRetype: '',
            isFlipped: false,
            disabled: true,
            store: store
        }
    },
    methods: {
        flip: function() {
            return this.isFlipped = !this.isFlipped;
        },
        isDisabled: function() {
            const signinCondition = !!(this.email.length > 3 && this.password.length > 3);
            const signupCondition = !!(
                this.emailSignup.length > 3 && 
                this.passwordSignup.length > 3 && 
                this.passwordRetype === this.passwordSignup
                );
            if (
                signinCondition || signupCondition
            ) {
                return this.disabled = false;
            }

            return this.disabled = true;
        },
        signUpUser: async function (event) {
            event.preventDefault();
            const fb = new Firebase();
            const { signUp } = await fb.auth();
            return await signUp(this.emailSignup, this.passwordSignup);
        },
        signInUser: async function(event) {
            event.preventDefault();
            const fb = new Firebase();
            const { signIn, currentUser, signOut } = await fb.auth();
            if (currentUser) {
                return signOut();
            } else {
                return await signIn(this.email, this.password);
            }
        }
    }
}
</script>

<style scoped>
    section {
        background: rgba( 68, 23, 11, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        min-width: 300px;
        height: 50%;
        min-height: 500px;
        position: relative;
        transition: transform 500ms;
        transform-style: preserve-3d;
        transform-origin: center;
    }
    form {
        width: 100%;
        height: 100%;
        min-height: 500px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    div {
        display: flex;
        flex-direction: column;
        position: relative;
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
    input {
        background: transparent;
        width: 200px;
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
    .signup-btn {
        background-color: rgba(255, 255, 255, 0);
        box-shadow: none;
        color: white;
        width: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .signup-btn:hover {
        background-color: rgba( 68, 23, 11, 0.25 );
    }
    .card {
        position: absolute;
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: opacity 300ms;
    }
    .front {
        transform: translateZ(2px);
    }
    .back > * {
        transform: rotateY(180deg);
    }
    .back {
        transform: translateZ(-1px);
        opacity: 0;
        display: none;
    }
    .flipped {
        transform: rotateY(180deg);
    }
    .flipped .back {
        transform: translateZ(1px);
        opacity: 1;
        display: block;
    }
    .flipped .front {
        opacity: 0;
        transform: translateZ(-1px);
    }
    button:disabled {
        cursor: default;
        background: rgb(153, 153, 153);
    }
    button:disabled:hover {
        background: rgb(153, 153, 153);
    }
</style>
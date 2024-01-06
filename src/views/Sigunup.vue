<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <form
      class="h-auto lg:w-[35%] bg-store-white flex flex-col p-16 relative w-[70%]"
      @submit.prevent="signUpWithPassword"
    >
      KD Store
      <h1 class="text-2xl font-semibold my-4">Create account</h1>
      <input
        class="w-[100%] border-b-[1px] border-blue-700 p-2 my-2 focus:outline-none truncate"
        placeholder="someone"
        type="user name"
        v-model="this.name"
      />
      <input
        class="w-[100%] border-b-[1px] border-blue-700 p-2 my-2 focus:outline-none truncate"
        placeholder="someone@example.com"
        type="email"
        v-model="this.email"
      />
      <input
        class="w-[100%] border-b-[1px] border-blue-700 p-2 my-2 focus:outline-none"
        placeholder="********"
        type="password"
        v-model="this.password"
      />

      <span class="text-red-700">{{ error }}</span>
      <router-link to="signin" class="cursor-pointer hover:text-blue-500"> Log in </router-link>
      <button class="bg-blue-700 text-store-white h-8 mt-10 w-24 align-right rounded-none">
        Next
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { error } from 'console'

export default {
  name: 'SignUp',
  components: {},
  data() {
    return {
      email: '',
      name: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signUpWithPassword(userDetails) {
      // const { email, password } = userDetails

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          // this.$router.push('/')
        })
        .catch((error) => {
          this.error = error.message
          // ..
        })
      updateProfile(auth.currentUser, { displayName: this.name })
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.error = error.message
          // ..
        })
    }
  }
}
</script>

<style></style>

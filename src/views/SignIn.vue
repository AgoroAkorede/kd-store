<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <form
      class="h-auto lg:w-[35%] bg-store-white flex flex-col p-16 relative w-[70%]"
      @submit.prevent="signInWithPassword(this)"
    >
      KD Store
      <h1 class="text-2xl font-semibold my-4">Log in</h1>
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
      <button class="bg-blue-700 text-store-white h-8 mt-10 w-24 align-right rounded-none">
        Next
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'pinia'
import { userItems } from '../stores'

export default {
  name: 'SignIn',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(userItems, ['signInWithPassword'])
  }
}
</script>

<style></style>

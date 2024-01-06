<script lang="ts">
import StoreIconVue from '../icons/StoreIcon.vue'
import { searchItems, userItems } from '../../stores'
import { mapActions, mapState } from 'pinia'
import SearchIconVue from '../icons/SearchIcon.vue'
import IconWrapper from '../icons/IconWrapper.vue'
import UserIcon from '../icons/UserIcon.vue'
export default {
  name: 'HeaderLayout',
  data() {
    return {
      query: '',
      searchModal: false
    }
  },
  // mounted() {
  //   this.createUser()
  // },
  components: {
    // 'icon-wrapper': IconWrapperVue,
    'store-icon': StoreIconVue,
    'search-icon': SearchIconVue,
    'user-icon': UserIcon
  },
  methods: {
    searchStore() {
      this.addTosearches(this.query)
      this.searchModal = true
      this.setSearchValue(this.query)
      this.$router.push({ name: 'SearchDetails', params: { name: this.query } })
    },
    showModal() {
      this.searchModal = !this.searchModal
    },
    remove(_: any) {
      this.removeSearch(_)
    },
    ...mapActions(searchItems, ['addTosearches', 'setSearchValue', 'removeSearch']),
    ...mapActions(userItems, ['createUser', 'signOutFromStore'])
  },
  computed: {
    ...mapState(searchItems, ['searchArray']),
    ...mapState(userItems, ['name', 'photoId', 'email', 'user'])
  }
}
</script>

<template>
  <div class="flex flex-col w-[100%] fixed z-50" @click="this.searchModal === false">
    <div class="h-[10vh] w-[100%] p-2 flex justify-around items-center bg-store-secondary">
      <div class="h-[100%] flex w-auto flex-nowrap items-center">
        <store-icon />
      </div>
      <p class="uppercase">KD Store</p>
      <form @submit.prevent="searchStore" class="relative">
        <div class="lg:h-4 w-4 absolute sm:right-1 h-0 cursor-pointer lg:right-4 top-3 ml-2">
          <search-icon />
        </div>

        <input
          class="bg-[#00000059] w-[50vw] border-store-grey focus:border-b-[2px] rounded-md p-2 focus:outline-none focus:border-[#FA2194] focus:rounded-t-md truncate"
          type="text"
          placeholder="Search apps, games, movies and more"
          v-model="this.query"
          @click="showModal"
        />
      </form>
      <div class="flex flex-col items-center justify-center h-[100%]">
        <div class="justify-center">
          <user-icon />
        </div>
        <span class="flex justify-center" v-if="name">{{ user.displayName }}</span>
      </div>
      <div class="bg-[#c2c2c2] absolute right-4 top-16 w-[18rem] rounded-2xl p-4">
        <p>{{ user.displayName }}</p>
        <p>{{ user.email }}</p>
        <button
          class="bg-transparent text-sm text-[#FA2194] capitalize"
          v-if="Object.keys(user).length > 0"
        >
          sign out
        </button>
        <router-link v-else to="/signin">signin</router-link>
      </div>
    </div>

    <div
      v-show="searchModal"
      class="absolute left-[32.5%] top-[10vh] z-20 h-auto rounded-b-2xl shadow-card overflow-hidden"
    >
      <div
        v-for="item in searchArray"
        :key="item.id"
        class="w-[52.5vw] bg-[#000000d4] flex flex-col cursor-pointer"
      >
        <div class="flex flex-row h-10 hover:bg-[#4b4b4bd4] justify-between p-3 items-center">
          <div @click="setSearchValue(item)" class="flex flex-row items-center w-[90%]">
            <div class="h-4 w-4 mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#c2c2c2">
                <path
                  d="M30,16A13,13,0,0,1,6.54,23.72l1.61-1.19a11,11,0,1,0-1.67-9.71l1-.65,1.12,1.66-3,2A1,1,0,0,1,5,16a1,1,0,0,1-.83-.44l-2-3,1.66-1.12.68,1A13,13,0,0,1,30,16ZM16,9v7a1,1,0,0,0,.29.71l3,3,1.42-1.42L18,15.59V9Z"
                ></path>
              </svg>
            </div>
            {{ item }}
          </div>
          <div class="hover:bg-[#4b4b4bd4] focus:bg-[#4b4b4bd4] px-2 rounded" @click="remove(item)">
            ×
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

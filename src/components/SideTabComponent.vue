<script>
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import AppIconVue from './icons/AppIcon.vue'
import GamingIcon from './icons/GamingIcon.vue'
import HomeIconVue from './icons/HomeIcon.vue'
import IconWrapperVue from './icons/IconWrapper.vue'
import MovieIconVue from './icons/MovieIcon.vue'

export default defineComponent({
  components: {
    'home-icon': HomeIconVue,
    'app-icon': AppIconVue,
    'icon-wrapper': IconWrapperVue,
    'gaming-icon': GamingIcon,
    'movie-icon': MovieIconVue
  },

  name: 'SideTabComponent',
  data() {
    return {
      isGaming: false,
      isHome: false,
      isApps: false,
      isMovies: false
    }
  },
  created() {
    this.updateStateBasedOnRoute()
  },
  watch: {
    $route(to, from) {
      // Update component state based on the current route
      this.updateStateBasedOnRoute()
    }
  },
  onMounted() {
    if (this.$route.path === '/Gaming') {
      this.isGaming = true
      // this.isHome = false
    } else if (this.$route.path === '/') {
      this.isHome = true
    } else if (this.$route.path === '/Apps') {
      this.isApps = true
    } else if (this.$route.path === '/Movies') {
      this.isMovies = true
    }
  },
  methods: {
    updateStateBasedOnRoute() {
      // Access route information from this.$route
      const routePath = this.$route.path

      // Update component state based on route
      if (routePath === '/') {
        this.isHome = true
      } else if (routePath === '/Gaming') {
        this.isGaming = true
      } else if (routePath === '/Apps') {
        this.isApps = true
      } else if (routePath === '/Movies') {
        this.isMovies = true
      }
      // Add other logic to update state based on different routes
    }
  },
  computed: {
    isHomeText() {
      return this.isHome ? '' : 'Home'
    },
    isGamingText() {
      return this.isGaming ? '' : 'Gaming'
    },
    isAppText() {
      return this.isApps ? '' : 'Apps'
    },
    isMoviesText() {
      return this.isMovies ? '' : 'Movies'
    }
  }
})
</script>

<template>
  <ul class="flex flex-col h-100vw bg-[#545454] z-20 w-[10vw] p-5 space-y-5">
    <!-- <RouterLink to="/">Home</RouterLink>  -->
    <li class="list-none fixed top-10">
      <icon-wrapper iconName="Home" :iconText="isHomeText"
        ><home-icon :isActive="isHome"
      /></icon-wrapper>
    </li>
    <li class="list-none fixed top-[5rem]">
      <icon-wrapper iconName="Apps" :iconText="isAppText"
        ><app-icon :isActive="isApps"
      /></icon-wrapper>
    </li>
    <li class="list-none fixed top-[10rem]">
      <icon-wrapper iconName="Gaming" :iconText="isGamingText"
        ><gaming-icon :isActive="isGaming"
      /></icon-wrapper>
    </li>
    <li class="list-none fixed top-[15rem]">
      <icon-wrapper iconName="Movies" :iconText="isMoviesText"
        ><movie-icon :isActive="isMovies"
      /></icon-wrapper>
    </li>
  </ul>
</template>

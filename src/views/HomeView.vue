<script lang="ts">
import CarouselComponentVue from '../components/CarouselComponent.vue'
import PageLayoutVue from '../components/Layout/PageLayout.vue'
import SideTabComponentVue from '../components/SideTabComponent.vue'
import { type Item } from '../types/index'
import Video from '../assets/cod.mp4'
import StoreItemComponent from '../components/StoreItemComponent.vue'
import CardItemComponentVue from '../components/CardItemComponent.vue'
import { MAIN_STORE, musicItemsData } from '../data'
import DetailedCardComponentVue from '../components/DetailedCardComponent.vue'

export default {
  components: {
    // 'side-tab-component': SideTabComponentVue,
    'page-layout': PageLayoutVue,
    'carousel-component': CarouselComponentVue,
    'store-item-component': StoreItemComponent,
    'card-item-component': CardItemComponentVue,
    'detailed-card-component': DetailedCardComponentVue
  },
  name: 'HomeView',
  data() {
    const [bestSellingGame, topFreeGame, movies] = MAIN_STORE
    return {
      items: [
        {
          src: 'https://www.smartinsights.com/wp-content/uploads/2018/08/spotify.jpg',
          alt: 1,
          color: '#016450',
          header: 'Spotify Music',
          pricing: 10,
          text: 'Discover personalized playlists',
          isVideo: false
        },
        {
          src: 'https://e0.pxfuel.com/wallpapers/652/898/desktop-wallpaper-avengers-endgame-background-best-movie-poster-avengers-film-movie-posters-avengers-cool-avengers-endgame.jpg',
          alt: 2,
          color: '#88a7df',
          isVideo: false
        },
        {
          src: 'https://assetsio.reedpopcdn.com/PC-Game-Pass-header.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
          alt: 3,
          color: '#ba9e8e',
          header: 'Join PC Game Pass',
          pricing: 1,
          text: 'Discover your next favorite game',
          isVideo: false
        },
        {
          src: 'https://cdn.europosters.eu/image/350/posters/elden-ring-battlefield-of-the-fallen-i121753.jpg',
          alt: 4,
          color: '#9caf9b',
          isVideo: false
        },
        {
          src: 'https://rukminim2.flixcart.com/image/850/1000/k6s82vk0/poster/y/x/2/medium-call-of-duty-game-poster-for-room-with-gloss-lamination-original-imafp5efnyhgwnqu.jpeg?q=20',
          alt: 5,
          color: '#fed12a',
          header: 'Call Of Duty Black Ops',
          pricing: 6,
          text: 'Immerse Yourself in the experience',
          isVideo: false
        },
        {
          src: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
          alt: 6,
          color: '#d45012',
          isVideo: false
        },
        {
          src: Video,
          alt: 7,
          color: '#253040',
          header: 'Call of Duty Warzone',
          pricing: 1,
          text: 'Play WIth Friends and Family',
          isVideo: true
        }
      ] as unknown as Item,
      musicStreamingItems: musicItemsData[0],

      bestSellingGame: bestSellingGame,
      topFreeGame: topFreeGame,
      movies: movies
    }
  }
}
</script>

<template>
  <page-layout class="relative flex flex-col"
    ><carousel-component :items="items" />
    <div class="absolute left-48 top-48 text-2xl font-bold">Home</div>
    <store-item-component />
    <card-item-component :card-props="musicStreamingItems" />
    <detailed-card-component :card-props="bestSellingGame" :height="17.5" :has-ads="true" />
    <detailed-card-component :card-props="topFreeGame" :height="23" :hasAds="false" />
    <detailed-card-component :card-props="movies" :height="20" :hasAds="false" class="mb-12" />
  </page-layout>
</template>

<style></style>

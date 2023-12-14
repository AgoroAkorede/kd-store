<template>
  <div class="flex flex-col">
    <div
      class="text-xl font-semibold w-auto max-w-[15rem] h-10 transition-transform cursor-pointer p-2 m-4 rounded hover:bg-[#4b4b4b44] hover:text-[#FA2194] hover:translate-x-3 flex justify-left items-center"
    >
      {{ cardProps.namedItem }}
    </div>
    <div class="flex flex-row space-x-4 mx-3 mb-5">
      <div v-show="hasAds" class="w-[40vw] bg-slate-700 rounded-lg"></div>
      <div
        v-for="(card, index) in cardProps.items"
        :key="cardProps.index"
        class="w-[15vw] rounded-2xl cursor-pointer flex flex-col hover:shadow-card relative"
        :class="{ 'bg-transparent': hovered }"
        :style="{ height: height }"
      >
        <div>
          <div class="flex justify-center items-center">
            <img
              class="rounded-lg object-fill self-center w-[100%]"
              @mouseover="setHovered(index)"
              :src="card.image"
              :style="{ height: `${height}rem` }"
            />
          </div>
          <div
            class="absolute bottom-0 h-[6rem] filter blur-lg bg-[#454343c6] w-[120%] rounded-full"
          ></div>
          <div class="p-3 absolute bottom-0 w-[100%] h-[5rem] flex flex-col justify-between z-20">
            <h2 class="leading-tight flex-wrap text-sm font-bold line-clamp-2">
              {{ card.name }}
            </h2>
            <div class="flex flex-row justify-between">
              <div>{{ card.rating }}</div>
              <div
                class="h-5 bg-[#3e3e3e] p-1 rounded w-auto flex text-xs items-center justify-center capitalize"
              >
                {{ card.isFree === true ? 'free' : `$${card.isFree}` }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="hovered === index"
          class="w-[30vw] z-30 rounded-xl overflow-hidden absolute shadow-card bg-[#212124] origin-top-left delay-[2s]"
          @mouseout="resetCardHovered()"
          :style="{ height: `${height + 5}rem` }"
          :class="{
            'translate-x-[0rem]': index === 0 && !hasAds,
            'translate-x-[-13.5rem]': index === cardLength - 1
          }"
        >
          <img :src="card.imageSecondary" class="h-[60%] w-[100%]" />
          <div class="flex flex-col p-3 text-gray-300">
            <h2 class="font-bold text-xl">{{ card.name }}</h2>
            <p>{{ card.organization }} | {{ card.rating }} | {{ card.detailedType }}</p>
            <p class="text-xs">{{ card.isFree === true ? 'Free' : `$${card.isFree}` }}</p>
            <p class="leading-tight text-xs italic my-6 flex-wrap line-clamp-2">
              {{ card.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetailedCardComponent',
  props: {
    cardProps: {
      type: Object,
      required: true
    },
    height: {
      type: Number,
      default: null
    },
    hasAds: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    setHovered(index) {
      this.hovered = index
      this.animateScale()
    },
    animateScale() {
      this.isScaling = true
      setTimeout(() => {
        this.isScaling = false
      }, 3000)
    },
    resetCardHovered() {
      console.log('card is not hovvered')
      this.hovered = null
    }
  },
  data() {
    return {
      hovered: null,
      isScaling: false,
      cardLength: this.cardProps.items.length
    }
  }
}
</script>

<style></style>

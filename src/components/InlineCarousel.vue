<template>
  <!-- <div v-if="loading"></div> -->
  <div class="h-[90%] relative overflow-hidden">
    <div class="overflow-x-hidden m-5 flex space-x-8 flex-row">
      <div v-for="(item, index) in items" :key="index">
        <div
          class="transition w-[34rem] duration-5000 flex-1 flex-row flex hover:brightness-75"
          :style="{ transform: `translateX(calc(-${current * 16}px + ${translateValue}rem))` }"
        >
          <img class="h-[15rem] w-full object-cover rounded-lg" :src="item" :alt="item" />
        </div>
      </div>
    </div>

    <button-wrapper
      :buttonProps="{
        height: '1.5rem',
        width: '1.5rem',
        buttonFunc: leftClick,
        extendedClass: `left-1 absolute top-[50%] bg-black ${
          current === 0 ? 'invisible' : 'visible'
        }`
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="#c2c2c2" viewBox="0 0 101 101" id="left">
        <path
          d="M68 17.1c-.9-.9-2.5-.9-3.4 0L33 48.8c-.9.9-.9 2.5 0 3.4l31.7 31.7c.5.5 1.1.7 1.7.7s1.2-.2 1.7-.7c.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4-.1-3.4z"
        ></path>
      </svg>
    </button-wrapper>

    <button-wrapper
      :buttonProps="{
        height: '1.5rem',
        width: '1.5rem',
        buttonFunc: rightClick,
        extendedClass: `right-2 absolute top-[50%] bg-black ${
          current === items.length - 1 ? 'invisible' : 'visible'
        }`
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="#c2c2c2" viewBox="0 0 101 101" id="right">
        <path
          d="M36.4 17.1c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7L68 52.2c.4-.5.7-1.1.7-1.7s-.3-1.2-.7-1.7L36.4 17.1z"
        ></path>
      </svg>
    </button-wrapper>
  </div>
</template>

<script>
import RightIconVue from './icons/RightIcon.vue'
import ButtonWrapperVue from './ButtonWrapper.vue'
import LeftIIconVue from './icons/LeftIIcon.vue'

export default {
  name: 'InlineCarousel',
  components: {
    // 'icon-wrapper': IconWrapperVue,
    'right-icon': RightIconVue,
    'left-icon': LeftIIconVue,
    'button-wrapper': ButtonWrapperVue
  },

  data() {
    return {
      current: 0,
      translateValue: 0,
      intervalId: null,
      timerDuration: 5000,
      newSlideReached: true
    }
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  computed: {},
  methods: {
    leftClick() {
      if (this.current > 0) {
        this.current = (this.current - 1 + this.items.length) % this.items.length
      }
      this.updateTranslateValue()
    },
    rightClick() {
      this.current = (this.current + 1) % this.items.length

      this.updateTranslateValue()
    },
    updateTranslateValue() {
      this.translateValue = -this.current * 34
    }
  }
}
</script>

<style scoped></style>

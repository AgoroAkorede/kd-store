<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="movie">
    <path
      :fill="fillColor"
      d="M27.977 8h-3.949L28 4.016 24.074 0h-5.566l3.988 3.984L18.41 8h-4.723l4.059-3.984L13.734 0H8.078l3.984 3.984L7.977 8H3.969l4.062-3.984L4.016 0H0v32h32V0h-3.922L32 4l-4.023 4zM28 27.957H4v-4h24v4zM28 20H4v-4h24v4z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'MovieIcon',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fillColor() {
      return this.isActive ? '#FA2194' : '#C2C2C2'
    }
  }
}
</script>

<style></style>

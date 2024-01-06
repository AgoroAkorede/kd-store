<template>
  <div class="flex flex-col px-8">
    <div
      class="text-xl font-semibold w-auto max-w-[15rem] h-10 transition-transform cursor-pointer p-2 m-4 rounded hover:bg-[#4b4b4b44] hover:text-[#FA2194] hover:translate-x-3 flex justify-left items-center"
    >
      {{ cardProps.namedItem }}
    </div>
    <div
      class="grid lg:grid-cols-6 gap-4 lg:mx-3 lg:w-[97.5%] mb-5 grid-cols-2 sm:grid-cols-3 w-[80%] mx-10 h-[15rem] overflow-hidden"
    >
      <div
        v-for="card in cardProps.items"
        :key="cardProps.items"
        class="bg-[#00000059] rounded-2xl h-[15rem] cursor-pointer overflow-hidden flex flex-col hover:shadow-card"
      >
        <div class="w-[100%] h-[60%] flex justify-center items-center bg-black">
          <img class="rounded-lg h-24 self-center w-24" :src="card.image" />
        </div>
        <div class="p-3 flex flex-col justify-between">
          <h2 class="h-12 leading-tight flex-wrap truncate">{{ card.name }}</h2>
          <div class="flex flex-row justify-between">
            <div>{{ card.rating }}</div>
            <div
              class="h-8 bg-[#4b4b4b44] p-1 rounded w-auto flex self-center justify-center capitalize"
            >
              {{ card.isFree ? 'free' : 'owned' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardItemComponent',
  props: {
    cardProps: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dominantColor: null
    }
  },
  mounted() {
    // this.getDominantColor()
    // const [muscic1, mucsic2] = others
    // console.log(muscic1)
  }

  // methods: {
  //   getDominantColor() {
  //     // const reader = new FileReader()

  //     // reader.onload = async (e) => {
  //     const imgData = document.querySelector('img')

  //     // Create a Vibrant instance
  //     const vibrant = new Vibrant(imgData)

  //     // Get the dominant color
  //     const swatches = vibrant.swatches()
  //     const dominantSwatch = swatches['Vibrant']

  //     if (dominantSwatch) {
  //       this.dominantColor = dominantSwatch.getHex()
  //     } else {
  //       console.error('Unable to extract dominant color.')
  //     }
  //   }
  // }
}
</script>

<style></style>

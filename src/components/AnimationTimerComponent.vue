<script lang="ts">
import { watch } from 'fs/promises'
import IconWrapperVue from './icons/IconWrapper.vue'
export default {
  name: 'AnimationTimerComponent',
  props: {
    duration: {
      type: Number,
      required: true
    }
  },
  created() {
    this.changeIcon()
  },
  data() {
    return {
      currentIcon: 0,
      iconOptions: ['timer1', 'timer2', 'timer3', 'timer4', 'timer5'],
      icon: '',
      timerDuration: this.duration
    }
  },
  components: {
    'icon-wrapper': IconWrapperVue
  },
  methods: {
    changeIcon() {
      setInterval(this.nextIcon, this.duration / 5)
    },
    nextIcon() {
      this.currentIcon = (this.currentIcon + 1) % this.iconOptions.length
    }
  },
  watch: {
    currentIcon: function (index) {
      for (let i = 0; i < this.iconOptions.length; i++) {
        if (index === i) {
          this.icon = `timer${i + 1}`
        }
      }
    }
  }
}
</script>

<template>
  <div v-if="this.duration !== 0">
    <div class="h-[2rem] w-[2rem] z-10" v-if="this.icon === 'timer1'">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="288" height="288">
        <g data-name="1" fill="#c2c2c2" class="color000 svgShape">
          <path
            d="M16,2a1,1,0,0,0-1,1V7a1,1,0,0,0,2,0V4.0507A11.993,11.993,0,1,1,7.5166,7.5171,1,1,0,0,0,6.1025,6.103,13.9968,13.9968,0,1,0,16,2Z"
            fill="#c2c2c2"
            class="color000 svgShape"
          ></path>
          <path
            d="M16,17a1,1,0,0,0,.707-1.707l-6-6a1,1,0,0,0-1.414,1.414l6,6A.9967.9967,0,0,0,16,17Z"
            fill="#c2c2c2"
            class="color000 svgShape"
          ></path>
        </g>
      </svg>
    </div>

    <div class="h-[2rem] w-[2rem] z-10" v-else-if="this.icon === 'timer2'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        xml:space="preserve"
      >
        <g transform="matrix(1 0 0 1 482.4563 500.0001)" id="357194">
          <g style="">
            <g transform="matrix(28.4091 0 0 28.4091 0 0)" id="SvgjsG1008">
              <path
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  is-custom-font: none;
                  font-file-url: none;
                  fill: #c2c2c2;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" translate(-16.0037, -15.9975)"
                d="M 16 2 a 1 1 0 0 0 -1 1 V 7 a 1 1 0 0 0 2 0 V 4.0507 A 11.993 11.993 0 1 1 7.5166 7.5171 A 1 1 0 0 0 6.1025 6.103 A 13.9968 13.9968 0 1 0 16 2 Z"
                stroke-linecap="round"
              />
            </g>
            <g
              transform="matrix(19.2949 20.8514 -20.8514 19.2949 -7.4673 -44.8821)"
              id="SvgjsG1008"
            >
              <path
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  is-custom-font: none;
                  font-file-url: none;
                  fill: #c2c2c2;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" translate(-13.0061, -13.0061)"
                d="M 16 17 a 1 1 0 0 0 0.707 -1.707 l -6 -6 a 1 1 0 0 0 -1.414 1.414 l 6 6 A 0.9967 0.9967 0 0 0 16 17 Z"
                stroke-linecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="h-[2rem] w-[2rem] z-10" v-else-if="this.icon === 'timer3'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        xml:space="preserve"
      >
        >
        <g transform="matrix(28.4091 0 0 28.4091 482.4562 500.0001)" id="SvgjsG1008">
          <path
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-dashoffset: 0;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              is-custom-font: none;
              font-file-url: none;
              fill: #c2c2c2;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" translate(-16.0037, -15.9975)"
            d="M 16 2 a 1 1 0 0 0 -1 1 V 7 a 1 1 0 0 0 2 0 V 4.0507 A 11.993 11.993 0 1 1 7.5166 7.5171 A 1 1 0 0 0 6.1025 6.103 A 13.9968 13.9968 0 1 0 16 2 Z"
            stroke-linecap="round"
          />
        </g>
        <g transform="matrix(-1.986 28.3396 -28.3396 -1.986 499.9999 477.6744)" id="SvgjsG1008">
          <path
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-dashoffset: 0;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              is-custom-font: none;
              font-file-url: none;
              fill: #c2c2c2;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" translate(-13.0061, -13.0061)"
            d="M 16 17 a 1 1 0 0 0 0.707 -1.707 l -6 -6 a 1 1 0 0 0 -1.414 1.414 l 6 6 A 0.9967 0.9967 0 0 0 16 17 Z"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>

    <div class="h-[2rem] w-[2rem] z-10" v-else-if="this.icon === 'timer4'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        xml:space="preserve"
      >
        <g transform="matrix(28.4091 0 0 28.4091 482.4562 500)" id="SvgjsG1008">
          <path
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-dashoffset: 0;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              is-custom-font: none;
              font-file-url: none;
              fill: #c2c2c2;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" translate(-16.0037, -15.9975)"
            d="M 16 2 a 1 1 0 0 0 -1 1 V 7 a 1 1 0 0 0 2 0 V 4.0507 A 11.993 11.993 0 1 1 7.5166 7.5171 A 1 1 0 0 0 6.1025 6.103 A 13.9968 13.9968 0 1 0 16 2 Z"
            stroke-linecap="round"
          />
        </g>
        <g transform="matrix(-28.282 2.6843 -2.6843 -28.282 580.2005 562.8873)" id="SvgjsG1008">
          <path
            style="
              stroke: none;
              stroke-width: 1;
              stroke-dasharray: none;
              stroke-linecap: butt;
              stroke-dashoffset: 0;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              is-custom-font: none;
              font-file-url: none;
              fill: #c2c2c2;
              fill-rule: nonzero;
              opacity: 1;
            "
            transform=" translate(-13.0061, -13.0061)"
            d="M 16 17 a 1 1 0 0 0 0.707 -1.707 l -6 -6 a 1 1 0 0 0 -1.414 1.414 l 6 6 A 0.9967 0.9967 0 0 0 16 17 Z"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>
    <div class="h-[2rem] w-[2rem] z-10" v-else-if="this.icon === 'timer5'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        xml:space="preserve"
      >
        <g transform="matrix(1 0 0 1 482.4563 500)" id="962853">
          <g style="">
            <g transform="matrix(28.4091 0 0 28.4091 0 0)" id="SvgjsG1008">
              <path
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  is-custom-font: none;
                  font-file-url: none;
                  fill: #c2c2c2;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" translate(-16.0037, -15.9975)"
                d="M 16 2 a 1 1 0 0 0 -1 1 V 7 a 1 1 0 0 0 2 0 V 4.0507 A 11.993 11.993 0 1 1 7.5166 7.5171 A 1 1 0 0 0 6.1025 6.103 A 13.9968 13.9968 0 1 0 16 2 Z"
                stroke-linecap="round"
              />
            </g>
            <g transform="matrix(0 -28.4091 28.4091 0 -82.7069 57.8748)" id="SvgjsG1008">
              <path
                style="
                  stroke: none;
                  stroke-width: 1;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-dashoffset: 0;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  is-custom-font: none;
                  font-file-url: none;
                  fill: #c2c2c2;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform=" translate(-13.0061, -13.0061)"
                d="M 16 17 a 1 1 0 0 0 0.707 -1.707 l -6 -6 a 1 1 0 0 0 -1.414 1.414 l 6 6 A 0.9967 0.9967 0 0 0 16 17 Z"
                stroke-linecap="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

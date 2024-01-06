import router from '@/router'
import { defineStore } from 'pinia'

interface SearchItem {
  name: string
  id: number
}
type Item = {
  id: number
  name: string
  rating: number
  type: 'Music' | 'Social' | 'Photo & video' | 'Productivity' | 'Gaming' | 'Movies'
  image: string
  isFree: boolean | number
}
type ItemDetailed = {
  organization: string
  imageSecondary: string
  details: string
  detailedType: string
}

type completeItem = Item & ItemDetailed

export const searchItems = defineStore('search', {
  state: () => ({
    search: '',
    searchModal: false,
    searchArray: [] as SearchItem[]
  }),
  getters: {},
  actions: {
    toggleSearchModal() {
      this.searchModal = !this.searchModal
    },
    addTosearches(item: SearchItem) {
      if (this.searchArray.length <= 6 || !this.searchArray.includes(item)) {
        this.searchArray.push(item)
      } else {
        // Replace with useToast
        alert('cannot input')
      }
    },
    setSearchValue(val: string) {
      console.log('is Seraching')
      this.search = val
    },
    removeSearch(itemToRemove: SearchItem) {
      this.searchArray = this.searchArray.filter((item) => item !== itemToRemove)
    }
  }
})
export const storeItems = defineStore('store', {
  state: () => ({
    storeObj: {} as completeItem
  }),
  getters: {},
  actions: {
    addToStoreItems(item: completeItem) {
      this.storeObj = item
    }
  }
})

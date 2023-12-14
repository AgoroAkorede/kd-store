import router from '@/router'
import { defineStore } from 'pinia'

interface SearchItem {
  name: string
  id: number
}

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
      if (this.searchArray.length <= 6) {
        this.searchArray.push(item)
      } else {
        // Replace with useToast
        alert('Recent searches limit Reached')
      }
    },
    setSearch(val: SearchItem) {
      console.log(val)
      // router.push(val)
    },
    removeSearch(itemToRemove: SearchItem) {
      this.searchArray = this.searchArray.filter((item) => item !== itemToRemove)
    }
  }
})

// localStoragePlugin.js

export function localStoragePlugin(store) {
  // Load state from localStorage
  if (localStorage.getItem(store.$id)) {
    store.replaceState(JSON.parse(localStorage.getItem(store.$id)))
  }

  // Save state to localStorage whenever it changes
  store.$subscribe(
    (mutation) => {
      localStorage.setItem(store.$id, JSON.stringify(store.$state))
    },
    { immediate: true }
  )
}

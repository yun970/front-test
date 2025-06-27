import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getCounter = async () => {
      const response = await axios.get('/api/counter')
      count.value = response.data.count    
      return count.value
  }

  return { increment,getCounter }
})

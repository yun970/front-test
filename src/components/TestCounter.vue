<template>
    <div>
      <p>Times clicked: {{ count }}</p>
      <button @click="increment">increment</button>

      <p>Store count: {{ storeCount }}</p>

      <p>axios count: {{axiosCount}}</p>
    </div>
</template>
  <script setup>
    import { onMounted, ref } from 'vue'
    import { useCounterStore } from '@/stores/counter.js'
    import axios from 'axios'
    const counter = useCounterStore()
    const storeCount = ref(0)
    const axiosCount = ref(0)

    onMounted(async () => {
      storeCount.value = await counter.getCounter();

      const response = await axios.get('/api/counter');
      axiosCount.value = response.data.count;
    })
    
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    
  </script>
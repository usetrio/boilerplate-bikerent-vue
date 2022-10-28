<script lang="ts">
import { defineComponent } from 'vue'

import { BikeCard } from '@/components/card'

export default defineComponent({
  name: 'HomeView',
  components: {
    BikeCard
  },
  metaInfo() {
    return {
      title: 'Home - BikeRent Vue'
    }
  }
})
</script>

<template>
  <main>
    <h2>Home</h2>

    <div class="w-full">
      <bike-card />
    </div>
  </main>
</template>

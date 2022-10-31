<script lang="ts">
import { defineComponent } from 'vue'

import { BikeCard } from '@/components/bike'

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
  <div class="page page--home">
    <div class="grid grid-cols-3 gap-y-6 w-full">
      <bike-card />
    </div>
  </div>
</template>

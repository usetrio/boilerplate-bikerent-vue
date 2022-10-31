<script lang="ts">
import { defineComponent } from 'vue'

import { BikeList } from '@/components/bike'

export default defineComponent({
  name: 'HomeView',
  components: {
    BikeList
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
    <bike-list :items="[]" />
  </div>
</template>

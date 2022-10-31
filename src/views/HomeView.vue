<script lang="ts">
import { defineComponent } from 'vue'

import { BikeList } from '@/components/bike'
import { mockedBikeList } from '@/mocks'

export default defineComponent({
  name: 'HomeView',
  components: {
    BikeList
  },
  metaInfo() {
    return {
      title: 'Home - BikeRent Vue'
    }
  },
  data: () => ({
    list: mockedBikeList
  })
})
</script>

<template>
  <div class="page page--home">
    <bike-list :items="list" />
  </div>
</template>

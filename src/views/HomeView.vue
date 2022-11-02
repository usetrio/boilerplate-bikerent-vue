<script lang="ts">
import { defineComponent, nextTick } from 'vue'

import { BikeList } from '@/components/bike'
import { mockedBikeList } from '@/mocks'
import { client } from '@/core/api'
import { LoadingSpinner } from '@/components/loading'

export default defineComponent({
  name: 'HomeView',
  components: {
    BikeList,
    LoadingSpinner
  },
  metaInfo() {
    return {
      title: 'Home - BikeRent Vue'
    }
  },
  data: () => ({
    isLoading: false,
    list: mockedBikeList
  }),
  async mounted() {
    this.isLoading = true
    // TODO: remove once state management is implemented
    const { data } = await client.get('bikes/available')

    this.list = data

    await nextTick()
    this.isLoading = false
  }
})
</script>

<template>
  <div class="page page--home">
    <template v-if="isLoading">
      <div class="text-center my-32">
        <loading-spinner size="2xl" class="text-black" />
      </div>
    </template>
    <template v-else>
      <bike-list :items="list" />
    </template>
  </div>
</template>

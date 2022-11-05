<script lang="ts">
import { useBikeStore, mapActions, mapState } from '@/core/store'
import { defineComponent } from 'vue'

import { LoadingSpinner } from '@/components/loading'
import { BikeImageSelector } from '@/components/bike'

export default defineComponent({
  name: 'DetailsView',
  components: {
    LoadingSpinner,
    BikeImageSelector
  },
  data: () => ({
    isLoading: false
  }),
  computed: {
    ...mapState(useBikeStore, ['getBikeById']),
    id() {
      const { id } = this.$route.params || {}

      return Number(id) || null
    },
    data() {
      return (this.id && this.getBikeById(this.id)) || null
    },
    images() {
      return this.data?.imageUrls || []
    }
  },
  watch: {},
  async beforeMount() {
    if (!this.data) {
      this.isLoading = true
      await this.fetchBikeList()
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(useBikeStore, { fetchBikeList: 'fetchList' })
  }
})
</script>

<template>
  <div class="page page--details">
    <template v-if="isLoading">
      <div class="text-center my-32">
        <loading-spinner />
      </div>
    </template>
    <template v-else>
      <div class="grid gap-x-6 grid-cols-1">
        <div class="card">
          <bike-image-selector :images="images" />
        </div>
        <div class="card"></div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.page--details {
  position: relative;

  .grid {
    @include breakpoint('lg') {
      grid-template-columns: minmax(400px, 67%) 1fr;
    }
  }
}
</style>

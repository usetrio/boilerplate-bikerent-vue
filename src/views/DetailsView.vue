<script lang="ts">
import { useBikeStore, mapActions, mapState } from '@/core/store'
import { defineComponent } from 'vue'

import { LoadingSpinner } from '@/components/loading'
import { BikeImageSelector, BikeSpecs, type BikeSpecsProps, BikePrice } from '@/components/bike'
import { Chip } from '@/components/chip'
import { PropCurrencyCode } from '@/components/bike/BikePrice.vue'
import { BookingAddressMap } from '@/components/booking'

export default defineComponent({
  name: 'DetailsView',
  components: {
    LoadingSpinner,
    BikeImageSelector,
    BikeSpecs,
    BikePrice,
    Chip,
    BookingAddressMap
  },
  data: () => ({
    isLoading: false,
    currency: PropCurrencyCode.EUR,
    mockAddress: '745 Atlantic Ave, Boston, MA 02111, United States'
  }),
  computed: {
    ...mapState(useBikeStore, ['getBikeById']),
    hasData() {
      return !!this.data
    },
    id() {
      const { id } = this.$route.params || {}

      return Number(id) || null
    },
    data() {
      return (this.id && this.getBikeById(this.id)) || null
    },
    images() {
      return this.data?.imageUrls || []
    },
    specs(): BikeSpecsProps {
      const { bodySize, maxLoad, ratings } = this.data || {}

      return {
        bodySize,
        maxLoad,
        ratings
      }
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
    <template v-else-if="!hasData">
      <p>No data available</p>
    </template>
    <template v-else>
      <div class="grid gap-x-6 grid-cols-1">
        <div class="card">
          <bike-image-selector :images="images" class="mb-8" />

          <bike-specs :specs="specs" />

          <div class="divider" />

          <article>
            <h2 class="font-extrabold text-4xl">{{ data!.name }}</h2>
            <chip color="secondary" size="sm">{{ data!.type }}</chip>

            <p>{{ data!.description }}</p>
          </article>

          <section class="pricing">
            <div class="divider" />
            <div class="flex">
              <div class="font-semibold">Day</div>
              <bike-price :price="data!.rate" :currency="currency" rate="daily" class="ml-auto" />
            </div>
            <div class="flex">
              <div class="font-semibold">Week</div>
              <bike-price :price="data!.rate * 7" :currency="currency" rate="weekly" class="ml-auto" />
            </div>
            <div class="divider" />
          </section>

          <booking-address-map :address="mockAddress" />
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

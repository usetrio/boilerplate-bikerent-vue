<script lang="ts">
import { defineComponent } from 'vue'

import Card from '@/components/card/Card.vue'
import { Chip } from '@/components/chip'
import BikePrice, { PropCurrencyCode } from './BikePrice.vue'
import BikeBookmark from './BikeBookmark.vue'

export default defineComponent({
  name: 'BikeCard',
  components: {
    BikePrice,
    BikeBookmark,
    Card,
    Chip
  },
  data: () => ({
    isBookmarked: false
  }),
  computed: {
    currency() {
      return PropCurrencyCode.EUR
    }
  }
})
</script>

<template>
  <div class="bike-card">
    <card>
      <template #title>
        <div class="bike-card__title">
          <h3><a href="#">Kent Flexer</a></h3>
        </div>
      </template>

      <template #image>
        <div class="bike-card__image">
          <a href="#">
            <img
              src="https://media.istockphoto.com/photos/blue-modern-mens-mid-drive-motor-city-touring-or-trekking-e-bike-picture-id1338461762?s=612x612"
            />
          </a>
        </div>

        <div class="bike-card__bookmark">
          <bike-bookmark v-model:active="isBookmarked" />
        </div>
      </template>

      <template #content>
        <div class="flex items-center">
          <chip>All terrain bike</chip>

          <div class="ml-auto">
            <bike-price :price="25" :currency="currency" rate="daily" />
          </div>
        </div>
      </template>
    </card>
  </div>
</template>

<style lang="scss" scoped>
.bike-card {
  position: relative;
  max-width: 400px;

  @include element('title') {
    @apply .pb-2, .mb-2;

    border-bottom: 1px solid get-theme-color('gray');
  }

  @include element('bookmark') {
    @apply .absolute;

    right: 15px;
    top: 15px;
  }

  @include element('image') {
    @apply .mb-4, .px-6, py-4;

    height: 145px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>

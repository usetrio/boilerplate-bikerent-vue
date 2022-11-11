<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { CurrencyCode } from '@/core/config'

export type PropRate = 'daily' | 'weekly' | 'monthly' | 'anually' | 'none'

export default defineComponent({
  name: 'BikePrice',
  props: {
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String as PropType<CurrencyCode>,
      required: true
    },
    rate: {
      type: String as PropType<PropRate>,
      default: 'nome'
    }
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.currency,
        currencyDisplay: 'symbol',
        maximumFractionDigits: this.price % 1 > 0 ? 2 : 0
      })
      const [{ value: currency }, { value: price }] = formatter.formatToParts(this.price)

      return `${price} ${currency}`
    },
    rateLabel() {
      let label = ''
      switch (this.rate) {
        case 'daily':
          label = 'Day'
          break
        case 'weekly':
          label = 'Week'
          break
        case 'monthly':
          label = 'Month'
          break
        case 'anually':
          label = 'Year'
          break
        default:
      }

      return label
    }
  }
})
</script>

<template>
  <div class="bike__price">
    <strong>{{ formattedPrice }}</strong>
    <template v-if="rateLabel">/ {{ rateLabel }}</template>
  </div>
</template>

<style lang="scss" scoped>
@include block('bike__price') {
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;

  strong {
    font-weight: 800;
    font-size: 24px;
    line-height: 31px;
  }
}
</style>

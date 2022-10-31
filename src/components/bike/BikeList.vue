<script lang="ts">
/* global Bike */

import BikeCard from './BikeCard.vue'

import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'BikeList',
  components: {
    BikeCard
  },
  props: {
    items: {
      type: Array as PropType<Bike[]>,
      default: () => []
    }
  },
  data: () => ({})
})
</script>

<template>
  <div class="bike-list grid grid-cols-3 gap-y-6">
    <template v-for="(item, i) in items" :key="`bike-${i}`">
      <bike-card :data="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.bike-list {
  position: relative;
}
</style>

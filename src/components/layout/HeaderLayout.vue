<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="header container container--fluid">
    <div class="container mx-auto">
      <h1>BikeRent</h1>

      <div class="navigation px-0">
        <slot name="menu" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
}
</style>

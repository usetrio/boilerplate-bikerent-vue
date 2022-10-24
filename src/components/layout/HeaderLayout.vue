<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="header">
    <h1>BikeRent</h1>

    <slot name="menu" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
}
</style>

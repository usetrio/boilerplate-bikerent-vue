<script lang="ts">
import { defineComponent } from 'vue'

import { HeaderLayout } from '@/components/layout'

export default defineComponent({
  components: {
    HeaderLayout
  },
  metaInfo() {
    return {
      title: 'BikeRent Vue'
    }
  }
})
</script>

<template>
  <metainfo>
    <template #title="{ content }">{{ content }}</template>
  </metainfo>

  <header-layout />

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

<style scoped></style>

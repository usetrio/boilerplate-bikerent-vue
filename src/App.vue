<script lang="ts">
import { defineComponent } from 'vue'

import { HeaderLayout } from '@/components/layout'
import { TopMenu } from '@/components/menu'

export default defineComponent({
  components: {
    HeaderLayout,
    TopMenu
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

  <header-layout>
    <template #menu>
      <top-menu />
    </template>
  </header-layout>

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

<style scoped></style>

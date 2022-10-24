<script lang="ts">
import { defineComponent } from 'vue'

import { HeaderLayout } from '@/components/layout'
import { TopMenu } from '@/components/menu'

export default defineComponent({
  components: {
    HeaderLayout,
    TopMenu
  }
})
</script>

<template>
  <header-layout>
    <template #menu>
      <top-menu />
    </template>
  </header-layout>

  <RouterView />
</template>

<style scoped></style>

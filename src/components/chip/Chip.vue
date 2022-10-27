<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Chip',
  props: {
    // TODO: use props
    size: {
      type: String,
      default: 'sm'
    },
    color: {
      type: String,
      default: 'gray'
    }
  }
})
</script>

<template>
  <div class="chip">
    <div class="chip__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chip {
  @apply .relative, .items-center, .inline-flex, .max-w-full, .overflow-hidden, .py-2, .px-3;

  line-height: 20px;
  outline: none;
  text-decoration: none;
  vertical-align: middle;
  background-color: get-theme-color('gray');
  border-radius: $border-radius-md;

  @include element('content') {
    @apply .inline-flex, .h-ful, .items-center, .max-w-full;
  }
}
</style>

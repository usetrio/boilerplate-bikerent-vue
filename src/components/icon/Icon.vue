<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export enum IconType {
  REGULAR = 'regular',
  SOLID = 'solid'
}
export type IconSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

export default defineComponent({
  name: 'Icon',
  props: {
    type: {
      type: String as PropType<IconType>,
      default: IconType.REGULAR
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'base'
    }
  },
  computed: {
    icon() {
      const [icon] = (this.$slots.default && this.$slots.default()) || []

      if (!icon) {
        return ''
      }

      return (icon.children as String).trim()
    },
    componentClass() {
      return ['icon', `icon--${this.size}`]
    },
    computedClass() {
      const classes = [`fa-${this.type}`]

      if (this.icon) {
        classes.push(`fa-${this.icon}`)
      }

      return classes
    }
  }
})
</script>

<template>
  <div :class="componentClass">
    <em :class="computedClass" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  @apply .inline-block, .text-base;
  position: relative;

  @include modifier('xs') {
    @apply .text-xs;
  }
  @include modifier('sm') {
    @apply .text-sm;
  }
  @include modifier('lg') {
    @apply .text-lg;
  }
  @include modifier('xl') {
    @apply .text-xl;
  }
}
</style>

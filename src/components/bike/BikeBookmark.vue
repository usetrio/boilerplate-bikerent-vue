<script lang="ts">
import { Icon, IconType } from '@/components/icon'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BikeBookmark',
  components: {
    Icon
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:active'],
  computed: {
    iconType() {
      return this.active ? IconType.SOLID : IconType.REGULAR
    }
  },
  methods: {
    handleToggleActive() {
      this.$emit('update:active', !this.active)
    }
  }
})
</script>

<template>
  <div class="bike-bookmark" @click.prevent="handleToggleActive">
    <icon :type="iconType" size="xl">heart</icon>
  </div>
</template>

<style lang="scss" scoped>
.bike-bookmark {
  position: relative;
  cursor: pointer;
}
</style>

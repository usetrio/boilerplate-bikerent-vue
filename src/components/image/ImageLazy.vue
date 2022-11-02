<script lang="ts">
/* global Maybe */
import { defineComponent, nextTick } from 'vue'
import { debounce } from 'lodash-es'

interface ImageLazyData {
  observer: Maybe<IntersectionObserver>
}

export default defineComponent({
  name: 'ImageLazy',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: (): ImageLazyData => ({
    observer: null
  }),
  computed: {
    image(): Maybe<HTMLImageElement> {
      return this.$refs.image as HTMLImageElement
    }
  },
  beforeMount() {
    this.observer = new IntersectionObserver(
      debounce(async ([entry]) => {
        const { isIntersecting } = entry

        if (isIntersecting && !this.image?.src) {
          this.setImage()

          await nextTick()
          this.observer!.disconnect()
        }
      }, 100),
      {
        threshold: 0
      }
    )
  },
  async mounted() {
    await nextTick()
    this.image && this.observer?.observe(this.image)
  },
  beforeUnmount() {
    this.observer?.disconnect()
  },
  methods: {
    setImage() {
      if (!this.image) {
        return
      }

      this.image.src = this.src
    }
  }
})
</script>

<template>
  <img ref="image" class="image-lazy" />
</template>

<style lang="scss" scoped>
.image-lazy {
  position: relative;
}
</style>

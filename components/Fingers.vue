<template lang="pug">
.flex.y_center
  img(
    src="https://icongr.am/octicons/thumbsup.svg?size=16&color=currentColor"
  )
  .mx-2 {{up}}
  img(
    src="https://icongr.am/octicons/thumbsdown.svg?size=16&color=currentColor"
  )
  .mx-2 {{down}}
</template>

<script>
import { randomInt } from '~/data/DATA.js'
export default {
  data() {
    return {
      up: randomInt(20, 190),
      down: randomInt(20, 190),
    }
  },
}
</script>

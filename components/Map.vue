<template lang="pug">
//- #MAP.flex
//-   .bold.text_x6.m_auto Здесь карта
#MAP
  client-only
    yandex-map(
      style="width: 100%; height: 100%"
      :coords="coords"
      zoom=13
      :scroll-zoom="false"
    )

</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      coords: [56.323851, 44.027802],
      // settings: {},
    }
  },
}
</script>

<style lang="stylus">
#MAP
  background #EEE
  // border: 4px dashed #DDD;
  // color #BBB
  height 580px
</style>

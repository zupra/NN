<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide(
        v-for="It in Initiatives"
        :key="It.id"
    )
      .cardFigure
        .cardFigureCaption
          .flex
            .Tag.green В работе
          div
            .bold {{It.text}}
            .mt-3 {{It.date}}
        picture
          img(
            :src="`https://picsum.photos/id/${It.id+60}/380/380`"
          )



    .swiper-button-prev(
      slot="button-prev"
    )
      img(
        src="https://icongr.am/fontawesome/angle-left.svg?size=72&color=ffffff"
      )
    .swiper-button-next(
      slot="button-next"
    )
      img(
        src="https://icongr.am/fontawesome/angle-right.svg?size=72&color=ffffff"
      )


</template>

<script>
// TODO какого глобально не работает
// import VClamp from 'vue-clamp'

import { Initiatives } from '~/data/DATA.js'

export default {
  components: {
    // VClamp,
  },
  data() {
    return {
      Initiatives,
      // =============
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // slidesPerView: 4,
        // spaceBetween: 80,
        // effect: 'fade',
        loop: true,
        centeredSlides: true,
        /**/
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },

        /*
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // dynamicBullets: true
        },
        */

        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
      // -
    }
  },
}
</script>

<style lang="stylus" scoped></style>

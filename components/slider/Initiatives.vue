<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide(
      v-for="(It,idx) in Initiatives"
      :key="It.id"
    )
      N-link.cardFigure(
        :to="`/initiatives/${It.id}`"
      )
        .cardFigureCaption
          .flex_wr
            .Tag.green {{ Object.values(It.category).toString()}}
          div
            .bold {{It.title}}
            .opacityText.mt-3 {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}
            .flex.mt-2
              //- likes
              .flex(
                style="color:#95C763"
              )
                img(
                  src="https://icongr.am/material/thumb-up-outline.svg?size=18&color=95C763"
                )
                .mx-2 {{It.likes}}

              //- dislikes
              .flex(
                style="color:#EE587E"
              )
                img(
                  src="https://icongr.am/material/thumb-down-outline.svg?size=18&color=EE587E"
                )
                .mx-2 {{It.dislikes}}

        picture.cardFigurePicture
          //- :src="It.image"
          img.cardFigurePicture__img(
            :src="`https://picsum.photos/id/${idx+60}/380/380`"
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

// import { Initiatives } from '~/data/DATA.js'

export default {
  components: {
    // VClamp,
  },

  async fetch() {
    const { data } = await this.$axios.$get('initiatives')
    this.Initiatives = data
  },
  data() {
    return {
      Initiatives: [],
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

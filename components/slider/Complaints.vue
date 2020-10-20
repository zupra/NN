<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide(
        v-for="(It,idx) in Complaints"
        :key="It.id"
    )
      N-link.cardFigure(
        :to="`/complaints/${It.id}`"
      )
        .cardFigureCaption
          .flex
            .Tag.green {{It.status}}
          div
            .bold {{It.description}}
            .opacityText.mt-3 {{It.address}}
        picture.cardFigurePicture
          //- //- :src="It.image"
          img.cardFigurePicture__img(
            :src="`https://picsum.photos/id/${idx+120}/380/380`"
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

export default {
  components: {
    // VClamp,
  },
  async fetch() {
    const { data } = await this.$axios.$get('complaints')
    this.Complaints = data
  },
  data() {
    return {
      Complaints: [],
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

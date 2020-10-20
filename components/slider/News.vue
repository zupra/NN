<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide(
      v-for="(It,idx) in News"
      :key="It.id"
    )
      N-link.newsItem(
        :to="`/news/${It.id}`"
      )
        picture.newsItemPicture
          //- :src="`https://picsum.photos/id/${idx+10}/380/240`"
          img.newsItemPicture__img(
            v-if="It.image"
            :src="It.image"
          )
        .newsItemText
          .newsItemText__text {{It.title}}
          .newsItemText__date {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}



    .swiper-button-prev(
      slot="button-prev"
    )
      | &emsp; &emsp;
      img(
        src="https://icongr.am/jam/arrow-square-left.svg?size=48&color=ffffff"
      )
    .swiper-button-next(
      slot="button-next"
    )
      img(
        src="https://icongr.am/jam/arrow-square-right.svg?size=48&color=ffffff"
      )
      | &emsp; &emsp;


</template>

<script>
// TODO какого глобально не работает
// import VClamp from 'vue-clamp'

export default {
  components: {
    // VClamp,
  },
  async fetch() {
    const { data } = await this.$axios.$get('news')
    this.News = data
  },
  data() {
    return {
      News: [],
      /*
      Array.from({ length: 8 }, (_, idx) => ({
        id: idx + 1,
        text: this.$faker.lorem.paragraph(),
        date: new Date(this.$faker.date.past()).toLocaleString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      })),
      */
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
      // --
    }
  },
}
</script>

<style lang="stylus" scoped></style>

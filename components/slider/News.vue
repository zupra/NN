<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide(
      v-for="It in News"
      :key="It.id"
    )
    
      N-link.newsItem(
        to="/news/news_item"
      )
        img.newsItemImg(
        :src="`https://picsum.photos/id/${It.id+10}/380/240`"
        )
        .newsItemText
          .newsItemText__text {{It.text}}
          .newsItemText__date {{It.date}}



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
  data() {
    return {
      News: Array.from({ length: 8 }, (_, idx) => ({
        id: idx + 1,
        text: this.$faker.lorem.paragraph(),
        date: new Date(this.$faker.date.past()).toLocaleString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      })),
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

<style lang="stylus" scoped>

/*
.It
  transition transform 0.3s
  &:hover
    transform scale(1.06)
    // shadow()
*/

// .It
//   &:hover
//     // filter: none
//     filter: drop-shadow(0 0 16px blue);



/*
.swiper
  &-container
    padding-bottom: 5em;

  &-button-next, &-button-prev
    outline 0
    top 90% //1em;
    // bottom 0
    //height 4em //180px
    width 50px // 100px
    cursor none
    &:hover
      &:after
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px rgba(0,0,0,.14), 0 1px 14px rgba(0,0,0,.12);
    &:after
      cursor pointer
      content: '';
      circle(50px);
      background #FFF
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);

  &-button-prev
    // left 2em
    background: linear-gradient(90deg, rgba(#FFF, 0.5) 0%, rgba(#FFF, 0.0001) 99%);
    &:after
      background: red // #FFF url('~static/icon/L.png') no-repeat center;
  &-button-next
    // right: 2em
    background: linear-gradient(90deg, rgba(#FFF, 0.0001) 0%, rgba(#FFF, 0.5) 99%);
    &:after
      background: red // #FFF url('~static/icon/R.png') no-repeat center;


*/
</style>

<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide.It(
      v-for="It in newsList"
      :key="It.id"
    )

      figure
        img(
          :src="It.img"
        )
        figcaption
          .bold {{It.title}}
          .date {{It.date}}



      //-
        .flex.x_end
          a.link.mt-2.mr-3(
            :href="It.link"
          ) Подробно

    .swiper-pagination(
      slot="pagination"
    )

    .swiper-button-prev(
      slot="button-prev"
    )
    .swiper-button-next(
      slot="button-next"
    )


</template>

<script>
// TODO какого глобально не работает
// import VClamp from 'vue-clamp'

const DATA = [
  {
    id: 1,
    title:
      'В городах присутствия Росатома началась тестовая эксплуатация систем «умного города»',
    date: '09 июля 2020',
    link: 'https://rusatom-utilities.ru/news/631/',
    img: 'https://picsum.photos/id/201/380/292',
  },
  {
    id: 2,
    title:
      'Разработанные на хакатоне решения найдут применение в «Умном городе»',
    date: '02 июня 2020',
    link: 'https://rusatom-utilities.ru/news/619/',
    img: 'https://picsum.photos/id/202/380/292',
  },
  {
    id: 3,
    title:
      'Росатом организует хакатон для создания цифровых сервисов в атомных городах',
    date: '19 мая 2020',
    link: 'https://rusatom-utilities.ru/news/618/',
    img: 'https://picsum.photos/id/203/380/292',
  },
  {
    id: 4,
    title:
      '«Русатом Инфраструктурные решения» займется цифровой трансформацией Южно-Сахалинска',
    date: '18 мая 2020',
    link: 'https://rusatom-utilities.ru/news/617/',
    img: 'https://picsum.photos/id/204/380/292',
  },
  {
    id: 5,
    title: 'Росатом передает «Умный город» 10 атомградам',
    date: '07 апреля 2020',
    link: 'https://rusatom-utilities.ru/news/614/',
    img: 'https://picsum.photos/id/305/380/292',
  },
  {
    id: 6,
    title: 'Цифровые сервисы Росатома помогут развитию Томской области',
    date: '24 марта 2020',
    link: 'https://rusatom-utilities.ru/news/609/',
    img: 'https://picsum.photos/id/206/380/292',
  },
  {
    id: 7,
    title: 'Росатом развернет систему «Умный город» в Усолье-Сибирском',
    date: '31 августа 2020',
    link: 'https://rusatom-utilities.ru/news/650/',
    img: 'https://picsum.photos/id/307/380/292',
  },
]

export default {
  components: {
    // VClamp,
  },
  data() {
    return {
      newsList: DATA,
      // =============
      swiperOption: {
        // slidesPerView: 4,
        // spaceBetween: 80,
        // effect: 'fade',
        loop: true,
        /*
        autoplay: {
          delay: 2500
          // disableOnInteraction: false
        },
        */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // dynamicBullets: true
        },

        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 60,
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
    }
  },
}
</script>

<style lang="stylus" scoped>


.It
  transition transform 0.3s
  &:hover
    transform scale(1.06)


figure
  width 380px
  border-radius 16px
  position relative
  img
    display block
    border-radius: 16px;

figcaption
  border-radius: 0 0 16px 16px;
  position absolute
  bottom 0
  left 0
   width 100%
  padding 3em 1.4rem 1.4rem
  color #FFF

  background: linear-gradient(360deg, rgba(0, 21, 72, 0.72) 0%, rgba(0, 25, 72, 0) 100%);
  display: grid;
  grid-template-rows: 4.2em 1fr;
</style>

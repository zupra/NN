<template lang="pug">
client-only

  swiper(
    :options="swiperOption"
  )
    swiper-slide.It(
      v-for="It in newsList"
      :key="It.id"
    )
      //-
        img(
          src="https://via.placeholder.com/360x212"
        )

      //- :src="`https://picsum.photos/id/${idx+10}/280/160`"
      //- :src="require(`~/static/images/сities/${It.id}.jpg`)"

      img.Img(
        :src="It.img"
      )
      .text
        .bold {{It.title}}
        .date {{It.date}}

    //-
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
        src="https://icongr.am/fontawesome/angle-right.svg?size=128&color=ff0000"
      )
      | &emsp; &emsp;


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
    img: 'https://picsum.photos/id/11/380/212',
  },
  {
    id: 2,
    title:
      'Разработанные на хакатоне решения найдут применение в «Умном городе»',
    date: '02 июня 2020',
    link: 'https://rusatom-utilities.ru/news/619/',
    img: 'https://picsum.photos/id/12/380/212',
  },
  {
    id: 3,
    title:
      'Росатом организует хакатон для создания цифровых сервисов в атомных городах',
    date: '19 мая 2020',
    link: 'https://rusatom-utilities.ru/news/618/',
    img: 'https://picsum.photos/id/13/380/212',
  },
  {
    id: 4,
    title:
      '«Русатом Инфраструктурные решения» займется цифровой трансформацией Южно-Сахалинска',
    date: '18 мая 2020',
    link: 'https://rusatom-utilities.ru/news/617/',
    img: 'https://picsum.photos/id/14/380/212',
  },
  {
    id: 5,
    title: 'Росатом передает «Умный город» 10 атомградам',
    date: '07 апреля 2020',
    link: 'https://rusatom-utilities.ru/news/614/',
    img: 'https://picsum.photos/id/15/380/212',
  },
  {
    id: 6,
    title: 'Цифровые сервисы Росатома помогут развитию Томской области',
    date: '24 марта 2020',
    link: 'https://rusatom-utilities.ru/news/609/',
    img: 'https://picsum.photos/id/16/380/212',
  },
  {
    id: 7,
    title: 'Росатом развернет систему «Умный город» в Усолье-Сибирском',
    date: '31 августа 2020',
    link: 'https://rusatom-utilities.ru/news/650/',
    img: 'https://picsum.photos/id/17/380/212',
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


.Img
  border-radius 16px
.text
  margin-top 1em
  display: grid;
  // grid-gap: 10px;
  // grid-template-columns: 1fr 1fr;
  grid-template-rows: 4.2em 1fr;
</style>

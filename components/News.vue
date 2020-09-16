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
      //- :src="require(`~/static/img/сities/${It.id}.jpg`)"

      img.Img(
        :src="It.img"
      )
      .text
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
        // slidesPerView: 4,
        // spaceBetween: 80,
        // effect: 'fade',
        loop: true,
        /**/
        autoplay: {
          delay: 2500,
          // disableOnInteraction: false
        },

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

.date
  opacity: 0.48;

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

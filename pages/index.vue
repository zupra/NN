<template lang="pug">
.Page
  .wrap


    // Вместе сделаем город лучше ...
    Intro



    // Новости
    .Section_scrollTo#news
      N-link.H2Page(
        to="news"
      ) Новости

      SliderNews.mt-2



    // Интерактивная карта
    .Section_scrollTo#interactive_map.flex
      .flex_1
        h2.mb-4 Интерактивная карта
        p Мы собрали на одной карте информацию с 6 официальных ресурсов
          br
          | города и области
      .flex_1.flex.x_end
        Counters(
          num="8"
          str_1="Обращений"
          str_2="в работе"
        )
        Counters(
          num="759"
          str_1="Проблем"
          str_2="решено"
        )
    //-
    .flex.mt-5.mb-4
      .TAB.active Обращения
        sup 42
      .TAB Инициативы
        sup 12
      .TAB Транспорт
        sup 56
      .TAB Антиснег
        sup 2
      .TAB Реклама и НТО
        sup 12
      .TAB Экология
        sup 8
      .TAB Кадастр
        sup 4
  // Карта
  Map

  .wrap


    // Обращения
    .Section_scrollTo#complaints.flex
      .flex_1
        N-link.H2Page(
          to="complaints"
        ) Обращения
          
        p Вместе мы сможем сделать наш город лучше! Следите за ходом и результатами работ по обращениям, которые подают жители города и области
        
      .flex_1.flex.x_end
        Counters(
          num="128"
          str_1="Обращений"
          str_2="подано"
        )
        Counters(
          num="70"
          str_1="Обращений"
          str_2="исполнено"
        )
    SliderComplaints.mt-4


    // Инициативы
    .Section_scrollTo#initiatives.flex
      .flex_1
        N-link.H2Page(
          to="initiatives"
        ) Инициативы
          
        p Теперь Вы сами можете решать, как меняется город! Публикуйте 
          br
          | собственные предложения и голосуйте за уже выдвинутые инициативы
      .flex_1.flex.x_end
        Counters(
          num="123"
          str_1="Инициативы"
          str_2="подано"
        )
        Counters(
          num="100"
          str_1="Инициатив"
          str_2="реализовано"
        )
        Counters(
          num="78"
          str_1="Инициатив"
          str_2="на рассмотрении"
        )
    SliderInitiatives.mt-4

    // Голосования
    .Section_scrollTo#votings.flex
      .flex_1
        N-link.H2Page(
          to="voting"
        ) Голосования
          
        p На голосования выносятся только вопросы, касающиеся граждан города
          br
          | и относящиеся к компетенции Правительства и органов исполнительной 
          br
          | власти города или области 
      
      .flex_1.flex.x_end
        Counters(
          num="6"
          str_1="Голосований"
          str_2="Открыто"
        )
        Counters(
          num="2"
          str_1="Завершается"
          str_2="на этой неделе"
        )

    PreData
      pre {{Votings}}
    VotingsGrid.mt-4
    .BR

</template>

<script>
export default {
  layout: 'first',

  async asyncData({ app }) {
    const [
      // newsRes,
      // initiativesRes,
      // complaintsRes,
      votingsRes,
    ] = await Promise.all([
      // app.$axios.$get('news'),
      // app.$axios.$get('initiatives'),
      // app.$axios.$get('complaints'),
      app.$axios.$get('votings'),
    ])
    return {
      // News: newsRes.data,
      // Initiatives: initiativesRes.data,
      // Complaints: complaintsRes.data,
      Votings: votingsRes.data,
    }
  },

  data() {
    return {}
  },
}
</script>

<style lang="stylus">



.swiper-button-prev, .swiper-button-next
  outline 0
  filter: drop-shadow(2px 3px 4px #000);
.swiper-container
  .swiper-button-prev,
  .swiper-button-next
    &:after
      content ''


.BR
  height 4rem


.Section_scrollTo
  margin-top 4rem
  padding-top 2rem
</style>

<template lang="pug">
div

  .wrap
    // Intro
    .Intro.flex.x_sb.y_center
      div
        h1 Вместе сделаем 
          br
          | город лучше
        p.subHeader Участвуйте в голосованиях, сообщайте о проблемах
          br
          | и получайте самую актуальную информацию о 
          br
          | происходящем в городе
      img(src="~/static/img/intro_BG.png")
    .flex
      .Feature_button.mr-4(
        v-for="el in ['Предложить инициативу', 'Участвовать в голосованиях', 'Искать информацию на карте']"
      ) {{el}}


    .BR
    h2.mb-4 Новости
    News
    
    .BR
    // Интерактивная карта
    .flex
      .flex_1
        h2.mb-4 Интерактивная карта
        p Мы собрали на одной карте информацию с 6 официальных ресурсов
          br
          | города и области
      .flex_1.flex.x_end
        Counters(
          num_1="8"
          str_11="Обращений"
          str_12="в работе"
          num_2="759"
          str_21="Проблем"
          str_22="решено"
        )

    // Карта
    .flex.mt-5.mb-3
      .MAP_tab Обращения
        sup &nbsp;42
      .MAP_tab Инициативы
        sup &nbsp;12
      .MAP_tab Транспорт
        sup &nbsp;56
      .MAP_tab Антиснег
        sup &nbsp;2
      .MAP_tab Реклама и НТО
        sup &nbsp;12
      .MAP_tab Экология
        sup &nbsp;8
      .MAP_tab Кадастр
        sup &nbsp;4
  // Карта
  Map

  .wrap
    .BR
    // Инициативы
    .flex
      .flex_1
        h2.mb-4 Инициативы
        p Теперь Вы сами можете решать, как меняется город! Публикуйте 
          br
          | собственные предложения и голосуйте за уже выдвинутые инициативы
      .flex_1.flex.x_end
        Counters(
          num_1="123"
          str_11="Инициативы"
          str_12="подано"
          num_2="78"
          str_21="Инициатив"
          str_22="реализовано"
        )
    Initiatives.mt-4

    .BR
    // Голосования
    .flex
      .flex_1
        h2.mb-4 Голосования
        p На голосования выносятся только вопросы, касающиеся граждан города
          br
          | и относящиеся к компетенции Правительства и органов исполнительной 
          br
          | власти города или области 
      .flex_1.flex.x_end
        Counters(
          num_1="6"
          str_11="Голосований"
          str_12="Открыто"
          num_2="2"
          str_21="Завершается"
          str_22="на этой неделе"
        )


    VotingGrid.mt-5
    .BR

</template>

<script>
export default {}
</script>

<style lang="stylus">

.subHeader
  font-size 20px
  color $clr_gladiator

.MAP
  &_tab
    margin-right 1rem
    sup
      color $clr_rocky
</style>

<template lang="pug">
.flex

  .Voting
    .bold Организация зимних видов досуга на склонах и нижней террасе Лагерного Сада
    small Осталось 8 дней
    .flex_wr.y_start
      .Tag(
        v-for="el in ['Общее', 'Дороги', 'Ремонтные работы']"
      ) {{el}}

  .Voting.shawshank.mx-4
    .bold Установки по зарядке сотовых телефонов
    small Проголосовал
    .flex_wr.y_start
      .Tag(
        v-for="el in ['Общее', 'Благоустройство']"
      ) {{el}}

  .Voting.mr-4
    .bold Выбор общественных мероприятий на праздновании Дня Города
    small Узнать результаты
    .flex_wr.y_start
      .Tag(
        v-for="el in ['Ремонтные работы', 'Благоустройство']"
      ) {{el}}

  .Voting
    .bold Установки для дезинфекции помещений
    small Осталось 12 дней
    .flex_wr.y_start
      .Tag(
        v-for="el in ['Общее']"
      ) {{el}}


</template>

<script>
export default {}
</script>

<style lang="stylus">

.Voting
  width 276px
  padding 1em
  background $clr_rush
  display: grid;
  grid-template-rows: 5rem 2.4rem 1fr
  // line-height 1

  &.shawshank
    background $clr_shawshank

.Tag
  margin .2em
  background $clr_alien
  color #FFF
  border-radius: 1em
  line-height: 1
  padding .2em .7em
</style>

<template lang="pug">
.flex

  .Voting
    .bold Организация зимних видов досуга на склонах и нижней террасе Лагерного Сада
    div Осталось 8 дней
    .flex_wr
      .Tag(
        v-for="el in ['Общее', 'Дороги', 'Ремонтные работы']"
      ) {{el}}

  .Voting.mx-3
    .bold Установки по зарядке сотовых телефонов
    div Осталось 8 дней
    .flex_wr.y_start
      .Tag(
        v-for="el in ['Общее', 'Благоустройство']"
      ) {{el}}

  .Voting.mx-3
    .bold Выбор общественных мероприятий на праздновании Дня Города
    div Осталось 8 дней
    .flex_wr
      .Tag(
        v-for="el in ['Ремонтные работы', 'Благоустройство']"
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
  grid-template-rows: 4em 2em 1fr
  line-height 1

.Tag
  margin .2em
  background $clr_alien
  color #FFF
  border-radius: 1em
  line-height: 1
  padding .2em .7em
</style>

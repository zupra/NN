<template lang="pug">
.Page.wrap

  .flex
    .flex_1
      h2.mb-4 Голосования
      p На голосования выносятся только вопросы, касающиеся граждан города и относящиеся к компетенции Правительства и органов исполнительной власти города или области 
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


  .flex_wr.my-3
    .Tag(
      v-for="el in tagList"
    ) {{el}}



  .flex.my-4
    .TAB.active Все голосования
    .TAB(
      v-for="el in ['Доступные', 'Анонс', 'Активные', 'Завершённые']"
    ) {{el}}




</template>

<script>
const tagList = [
  'Все категории',
  'Дороги',
  'Общественные территории',
  'Общее',
  'Ремонтные работы',
  'Водоёмы',
]
export default {
  data() {
    return {
      tagList,
      // Initiatives,
    }
  },
}
</script>

<style></style>

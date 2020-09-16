<template lang="pug">
.Page.wrap
  .flex
    .flex_1
      h2.mb-4 Инициативы
      p На голосования выносятся только вопросы, касающиеся граждан города и относящиеся к компетенции Правительства и органов исполнительной власти города или области 
    .flex_1.flex.x_end
      Counters(
        num="123"
        str_1="Инициативы"
        str_2="подано"
      )
      Counters(
        num="78"
        str_1="Инициатив"
        str_2="реализовано"
      )


  .flex_wr.my-3
    .Tag(
      v-for="el in tagList"
    ) {{el}}

  .gridCards

    .cardFigure(
      v-for="(It,idx) in Initiatives"
      :key="It.id"
    )

      figure
        img(
          :src="`https://picsum.photos/id/${idx+10}/380/380`"
        )
        figcaption
          .bold {{It.text}}
          .date {{It.date}}


</template>

<script>
import { Initiatives } from '~/data/DATA.js'

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
      Initiatives,
    }
  },
}
</script>

<style lang="stylus"></style>

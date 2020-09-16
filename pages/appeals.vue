<template lang="pug">
.Page.wrap

  .flex
    .flex_1
      h2.mb-4 Обращения
      p Вместе мы сможем сделать наш город лучше! Следите за ходом и результатами работ по обращениям, которые подают жители города и области. 
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

  .flex_wr.my-3
    .Tag(
      v-for="el in tagList"
    ) {{el}}

  //- .BR
  //- pre {{Appeals}}
  .gridCards

    .cardFigure(
      v-for="(It,idx) in Appeals"
      :key="It.id"
    )
      figure
        img(
          :src="`https://picsum.photos/id/${idx+120}/380/380`"
        )
        figcaption
          .bold {{It.text}}
          div {{It.address}}
</template>

<script>
import { Appeals } from '~/data/DATA.js'

const tagList = [
  'Все обращения',
  'Готовится ответ',
  'С ответом',
  'Опровержение жителей',
  'Решенные',
]
export default {
  data() {
    return {
      tagList,
      Appeals,
    }
  },
}
</script>

<style lang="stylus"></style>

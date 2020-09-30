<template lang="pug">
.Page.wrap

  h2.mb-4 Новости

  .flex_wr.mb-3
    .Tag(
      v-for="el in tagList"
    ) {{el}}

  .gridCards
    .newsItem(
      v-for="(It,idx) in News"
      :key="It.id"
    )
      img.newsItemImg(
        :src="`https://picsum.photos/id/${idx+10}/380/240`"
      )
      .newsItemText
        .newsItemText__text {{It.text}}
        .newsItemText__date {{It.date}}

  .btn.my-5 Показать еще новости

</template>

<script>
import { News } from '~/data/DATA.js'

const tagList = [
  'Все категории',
  'Экономика',
  'Происшествия',
  'Транспорт',
  'Анонс',
  'Медицина',
  'Благоустройство',
  'Строительство',
  'Новости региона',
  'Новости города',
  'Культура',
  'Образование',
  'Спорт',
  'Событие',
  'Информация',
]

export default {
  data() {
    return {
      tagList,
      News,
    }
  },
}
</script>

<style lang="stylus"></style>

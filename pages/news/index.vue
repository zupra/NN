<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 

  h2.mb-4 Новости

  .flex_wr.mb-3
    .Tag(
      v-for="el in tagList"
    ) {{el}}

  transition-group.gridCards(
    name="list"
  )
    N-link.newsItem(
      v-for="It in News"
      :key="It.id"
      to="/news/news_item"
    )
      img.newsItemImg(
        :src="`https://picsum.photos/id/${It.id+10}/380/240`"
      )
      .newsItemText
        .newsItemText__text {{It.text}}
        .newsItemText__date {{It.date}}

  .btn.my-5(
    @click="loadMore()"
  ) Показать еще новости

</template>

<script>
// import { News } from '~/data/DATA.js'

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
      News: Array.from({ length: 6 }, (_, idx) => ({
        id: idx + 1,
        text: this.$faker.lorem.paragraph(),
        date: new Date(this.$faker.date.past()).toLocaleString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      })),
    }
  },
  computed: {
    lastId() {
      return this.News[this.News.length - 1].id + 1
    },
  },
  methods: {
    loadMore() {
      this.News.push(
        ...Array.from({ length: 3 }, (_, idx) => ({
          id: idx + this.lastId,
          text: this.$faker.lorem.paragraph(),
          date: new Date(this.$faker.date.past()).toLocaleString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        }))
      )
    },
  },
}
</script>

<style lang="stylus"></style>

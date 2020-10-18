<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 


  PreData
    pre {{DATA}}


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


  transition-group.gridCards(
    name="list"
  )
    N-link.cardFigure(
      v-for="(It,idx) in DATA"
      :key="It.id"
      :to="`/initiatives/${It.id}`"
    )

      .cardFigureCaption
        .flex
          .Tag.green В работе
        div
          .bold {{It.title}}
          .mt-3 {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}
      picture
        img(
           :src="`https://picsum.photos/id/${idx+60}/380/380`"
        )

  .btn_more.my-5(
    @click="loadMore()"
  ) Показать еще инициативы

</template>

<script>
// import { Initiatives } from '~/data/DATA.js'

const tagList = [
  'Все категории',
  'Дороги',
  'Общественные территории',
  'Общее',
  'Ремонтные работы',
  'Водоёмы',
]

export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.$get('initiatives')
    return { DATA: data }
  },
  data() {
    return {
      tagList,
      Initiatives: Array.from({ length: 6 }, (_, idx) => ({
        id: idx + 1,
        text: this.$faker.lorem.sentence(),
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
      return this.Initiatives[this.Initiatives.length - 1].id + 1
    },
  },
  methods: {
    loadMore() {
      this.Initiatives.push(
        ...Array.from({ length: 3 }, (_, idx) => ({
          id: idx + this.lastId,
          text: this.$faker.lorem.sentence(),
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

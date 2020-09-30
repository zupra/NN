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
      v-for="It in Initiatives"
      :key="It.id"
    )
      picture
        img(
          :src="`https://picsum.photos/id/${It.id+60}/380/380`"
        )
      .cardFigure__text
        .bold {{It.text}}
        .date {{It.date}}


  .btn.my-5(
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

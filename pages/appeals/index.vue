<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 

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


  transition-group.gridCards(
    name="list"
  )
    N-link.cardFigure(
      v-for="It in Appeals"
      :key="It.id"
      to="/appeals/appeals_item"
    )
      .cardFigureCaption
        .flex
          .Tag.green В работе
        div
          .bold {{It.text}}
          .mt-3 {{It.address}}
      picture
        img(
           :src="`https://picsum.photos/id/${It.id+120}/380/380`"
        )


  .btn_more.my-5(
    @click="loadMore()"
  ) Показать еще обращения


  //- pre {{Appeals}}
  //- pre {{$faker.lorem.sentence()}}
  //- pre {{lastId}}
</template>

<script>
import { randomInt } from '~/data/DATA.js'

const tags = ['Готовится ответ', 'Решено']

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
      Appeals: Array.from({ length: 6 }, (_, idx) => ({
        id: idx + 1,
        tag: tags[randomInt(0, 1)],
        text: this.$faker.lorem.words(),
        address: this.$faker.address.streetAddress(),
      })),
    }
  },
  computed: {
    lastId() {
      return this.Appeals[this.Appeals.length - 1].id + 1
    },
  },
  methods: {
    loadMore() {
      this.Appeals.push(
        ...Array.from({ length: 3 }, (_, idx) => ({
          id: idx + this.lastId,
          tag: tags[randomInt(0, 1)],
          text: this.$faker.lorem.words(),
          address: this.$faker.address.streetAddress(),
        }))
      )
    },
  },
}
</script>

<style lang="stylus"></style>

<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 

  //-
  PreData
    pre {{Complaints}}


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

  .flex_wr.my-4
    .Tag.clicked(
      :class="{active: !activeCategory}"
      @click="filterByCategory(null); activeCategory = null"
    ) Все категории
    .Tag.clicked(
      v-for="(It,idx) in Categories"
      :class="{active: It.id === activeCategory}"
      :key="It.id"
      @click="filterByCategory(It.id); activeCategory = It.id"
    ) {{It.name}}


  transition-group.gridCards(
    name="list"
  )
    N-link.cardFigure(
      v-for="(It,idx) in Complaints"
      :key="It.id"
      :to="`/complaints/${It.id}`"
    )
        .cardFigureCaption
          .flex
            .Tag.green {{It.status}}
          div
            .bold {{It.description}}
            .opacityText.mt-3 {{It.address}}
        picture.cardFigurePicture
          //- //- :src="It.image"
          img.cardFigurePicture__img(
            :src="`https://picsum.photos/id/${idx+120}/380/380`"
          )


  .flex(
    v-if="!Complaints.length"
  )
    h1.my-5.liteText.m_auto Пусто по фильтру

  .btn_more.my-5(
    @click="loadMore()"
  ) Показать еще обращения



</template>

<script>
export default {
  async asyncData({ app }) {
    const [complaintsRes, categoriesRes] = await Promise.all([
      app.$axios.$get('complaints'),
      app.$axios.$get('complaints/categories'),
    ])
    return {
      Complaints: complaintsRes.data,
      Categories: categoriesRes.data,
    }
  },

  data() {
    return {
      activeCategory: null,
    }
  },
  computed: {},
  methods: {
    async filterByCategory(ID) {
      const { data } = await this.$axios.$get('complaints', {
        params: { category_id: ID },
      })
      this.Complaints = data
    },

    loadMore() {},
  },
}
</script>

<style lang="stylus"></style>

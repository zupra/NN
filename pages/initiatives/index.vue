<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 

  //-
  PreData
    pre Initiatives:{{Initiatives}}


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
      v-for="(It,idx) in Initiatives"
      :key="It.id"
      :to="`/initiatives/${It.id}`"
    )

      .cardFigureCaption
        .flex_wr
          .Tag.green {{ Object.values(It.category).toString()}}
        div
          .bold {{It.title}}
          .opacityText.mt-3 {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}
          .flex.mt-2
            //- likes
            .flex(
              style="color:#95C763"
            )
              img(
                src="https://icongr.am/material/thumb-up-outline.svg?size=18&color=95C763"
              )
              .mx-2 {{It.likes}}

            //- dislikes
            .flex(
              style="color:#EE587E"
            )
              img(
                src="https://icongr.am/material/thumb-down-outline.svg?size=18&color=EE587E"
              )
              .mx-2 {{It.dislikes}}

      picture.cardFigurePicture
        //- :src="It.image"
        img.cardFigurePicture__img(
          :src="`https://picsum.photos/id/${idx+60}/380/380`"
        )
        
  .flex(
    v-if="!Initiatives.length"
  )
    h1.my-5.liteText.m_auto Пусто по фильтру

  .btn_more.my-5(
    @click="loadMore()"
  ) Показать еще инициативы

</template>

<script>
export default {
  async asyncData({ app }) {
    const [newsRes, categoriesRes] = await Promise.all([
      app.$axios.$get('initiatives'),
      app.$axios.$get('initiatives/categories'),
    ])
    return {
      Initiatives: newsRes.data,
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
      const { data } = await this.$axios.$get('initiatives', {
        params: { category_id: ID },
      })
      this.Initiatives = data
    },
    loadMore() {},
  },
}
</script>

<style lang="stylus"></style>

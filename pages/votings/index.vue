<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная /


  //-
    PreData
      pre {{Votings}}



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


  .flex_wr.mb-4
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





  .flex.my-4
    .TAB.active Все голосования
    .TAB(
      v-for="el in ['Доступные', 'Анонс', 'Активные', 'Завершённые']"
    ) {{el}}



  pre {{$data}}


</template>

<script>
export default {
  async asyncData({ app }) {
    const [votingsRes, categoriesRes] = await Promise.all([
      app.$axios.$get('votings'),
      app.$axios.$get('votings/categories'),
    ])
    return {
      Votings: votingsRes.data,
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
      const { data } = await this.$axios.$get('votings', {
        params: { category_id: ID },
      })
      this.Votings = data
    },

    loadMore() {},
  },
}
</script>

<style></style>

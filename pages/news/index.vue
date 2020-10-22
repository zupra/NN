<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 

  h2.mb-4 Новости

  //-
  PreData
    pre {{$data}}
  //- pre {{Categories}}
  

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


  //-
  transition-group.gridCards(
    name="list" tag="div"
  )
    N-link.newsItem.newsItem_hover(
      v-for="(It,idx) in News"
      :key="It.id"
      :to="`/news/${It.id}`"
    )

      .newsItemPicture
        //- :src="`https://picsum.photos/id/${idx+10}/380/240`"
        .newsItemPicture__tag.flex_wr(
          v-if="It.category"
        )
          .Tag.green {{ Object.values(It.category).toString()}}

        img.newsItemPicture__img(
          v-if="It.image"
          :src="It.image.replace('extra', 'medium')"
        )
        img(
          v-else
          src="~/static/images/news_imgPlaceholder.png"
        )
        
      .newsItemText
        .newsItemText__text {{It.title}}
        .newsItemText__date {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}


  .flex(
    v-if="!News.length"
  )
    h1.my-5.liteText.m_auto Пусто по фильтру

  .btn_more.my-5(
    v-show="hasLoadMore"
    @click="loadMore()"
  ) Показать еще новости

  //- pre {{TST_Meta}}
  //- pre {{hasLoadMore}}

</template>

<script>
export default {
  async asyncData({ app }) {
    const [newsRes, categoriesRes] = await Promise.all([
      app.$axios.$get('news'),
      app.$axios.$get('news/categories'),
    ])
    return {
      News: newsRes.data,
      Meta: newsRes.meta,
      Categories: categoriesRes.data,
    }
  },

  data() {
    return {
      activeCategory: null,
    }
  },
  computed: {
    // TST_Meta() {
    //   return { ...this.Meta, links: [] }
    // },
    hasLoadMore() {
      return !(this.Meta.current_page === this.Meta.last_page)
    },
    nextPage() {
      return this.Meta.current_page + 1
    },
  },
  methods: {
    async filterByCategory(ID) {
      const { data, meta } = await this.$axios.$get('news', {
        params: { category_id: ID },
      })
      this.News = data
      this.Meta = meta
    },
    async loadMore() {
      const { data, meta } = await this.$axios.$get('news', {
        params: {
          page: this.nextPage,
          category_id: this.activeCategory,
        },
      })
      this.News.push(...data)
      this.Meta = meta
    },
  },
}
</script>

<style lang="stylus"></style>

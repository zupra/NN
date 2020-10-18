<template lang="pug">
article
  .wrapArticle
    .breadcrumbs
      N-link.breadcrumbs_item(
        to="/"
      ) Главная / 
      N-link.breadcrumbs_item(
        to="/initiatives"
      ) Инициативы


    PreData
      pre {{$data}}

    //- article
      .my-4
        img(
          :src="`https://picsum.photos/id/91/780/360`"
        )
    h2 {{ It.title }}
    .my-3.flex.y_center
      .liteText {{new Date(It.updated_at).toLocaleDateString('ru-RU', {day: '2-digit',month: 'long',year: 'numeric'})}}
      .Tag.mx-3 Ремонтные работы
      .Tag Новости

    div {{It.text}}


    Map.mt-3

    .my-3.liteText Поделиться в соцсетях
    SocialSharing


    .my-5.ml-5
      h1 Комментарии...

  .wrap
    h3 Другие инициативы
    SliderInitiatives

  .BR
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  async asyncData({ app, params }) {
    const { data } = await app.$axios.$get(`initiatives/${params.id}`)
    return { It: data }
  },
}
</script>

<style lang="stylus">

article
  img
    border-radius: 20px;
  p
    line-height 1.5
    margin-bottom 1rem
</style>

<template lang="pug">
div
  .wrap  
    TopNav

  .wrapArticle
    .breadcrumbs
      N-link.breadcrumbs_item(
        to="/"
      ) Главная / 
      N-link.breadcrumbs_item(
        to="/news"
      ) Новости

    <Nuxt />

  Footer

</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
}
</script>

<style lang="stylus"></style>

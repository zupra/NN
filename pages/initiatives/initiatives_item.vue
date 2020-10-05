<template lang="pug">
.Page.wrap

  .breadcrumbs
    N-link.breadcrumbs_item(
      to="/"
    ) Главная / 
    N-link.breadcrumbs_item(
      to="/initiatives"
    ) Инициативы

  h1 TODO

</template>

<script>
export default {
  // layout: 'article',
}
</script>

<style lang="stylus"></style>

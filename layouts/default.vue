<template lang="pug">
div
  
  .wrap.my-3.flex.x_sb.y_center
    img(src="~/static/img/Logo.png")

    .flex.y_center
      .scrollTo(
        v-scroll-to="'#'"
      ) Новости
      .scrollTo.mx-4(
        v-scroll-to="'#'"
      ) Интерактивная карта
      .scrollTo.mr-4(
        v-scroll-to="'#'"
      ) Инициативы
      .scrollTo(
        v-scroll-to="'#'"
      ) Голосования

    div Профиль

  <Nuxt />

  Footer

</template>

<script>
// Новости
// Интерактивная карта
// Инициативы
// Голосования

const NAV = {
  news: 'Новости',
  interactive_map: 'Интерактивная карта',
  initiatives: 'Инициативы',
  voting: 'Голосования',
}

export default {
  data() {
    return {}
  },
}
</script>

<style></style>

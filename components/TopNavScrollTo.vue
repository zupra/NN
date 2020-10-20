<template lang="pug">
.TopNav.my-3.flex.x_sb.y_center
  N-link(
    to="/"
  )
    img(
      src="~/static/images/Logo.png"
    )
  .flex.y_center
    .scrollTo.mr-4(
      v-for="(val, key) in NAV"
      v-scroll-to="`#${key}`"
    ) {{val}}

  .flex.y_center
    img.mr-1(
      src="https://icongr.am/feather/user.svg?size=24&color=currentColor"
    )
    | Профиль
</template>

<script>
/*
Новости
Интерактивная карта
Инициативы
Голосования

Novosti
Interaktivnaya karta
Iniciativy
Golosovaniya
Obrashcheniya
*/

const NAV = {
  news: 'Новости',
  interactive_map: 'Интерактивная карта',
  initiatives: 'Инициативы',
  votings: 'Голосования',
  complaints: 'Обращения',
}

export default {
  data() {
    return {
      NAV,
    }
  },
}
</script>

<style lang="stylus"></style>

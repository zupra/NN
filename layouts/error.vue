<template lang="pug">
.Page.wrap.flex
  .m_auto.center
    h1 Ошибка
    h2.mb-3 Что-то пошло не так
    N-link.text_x2(
      to="/"
    ) На главную
  
</template>

<script>
export default {
  props: ['error'],
  asyncData() {
    throw new Error(':(')
  },
  mounted() {
    console.error('ERROR:', this.error.statusCode, this.error.message)
  },
}
</script>

<style lang="stylus"></style>

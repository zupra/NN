<template lang="pug">
.Footer
  .wrap.flex.x_sb
    // Left Col
    .flex_1.mr-5
      h3 Противодействие коррупции
      p Антикоррупционные мероприятия проводятся Правительством Нижегородской области в соответствии с планом, который утверждается ежегодно

      a.flex.my-3(
        href="#"
      ) Сообщить о фактах коррупции



      img.mt-4(src="~/static/images/gosuslugi_logo.png")
      p Зарегистрируйтесь на 
        a(
          href="#"
        ) gosuslugi.ru
        |  и получайте государтсвенные услуги без очередей и сложностей

      .flex.mt-5.mb-3
        div
          p.mb-3 Инициатор
          a(
            href="https://www.government-nnov.ru/"
          )
            img(src="~/static/images/NN_logo_W.png")
        .ml-5
          p.mb-3 Разработчик
          a(
            href="https://rusatom-utilities.ru/"
          )
            img(src="~/static/images/logo_RIR_W.png")

      a(
        href="#"
      ) Сообщить о проблеме на сайте


    // Right Col
    .flex_1.ml-5
      h3.mb-4 Контактные лица
      .flex
        picture.mr-3
          img(src="~/static/images/Face1.png")
        div
          .bold Шалабаев Юрий Владимирович
          p.my-2 Исполняющий полномочия главы города
          div 8 831 439-15-06
            a.ml-3(
              href="mailto:ann@admgor.nnov.ru"
            ) ann@admgor.nnov.ru

      .flex.mt-4
        picture.mr-3
          img(src="~/static/images/Face2.png")
        div
          .bold Фатхуллин Марат Умярович
          p.my-2 Директор департамента аналитики процессов и развития технологий управления
          div 8 831 467-11-02
            a.ml-3(
              href="mailto:itdd@admgor.nnov.ru"
            ) itdd@admgor.nnov.ru
          
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="stylus">

.Footer
  background $clr_gladiator
  color #FFF
  padding 4rem 0
  p
    color rgba(#FFF, .64)
  a
    color #FFF
</style>

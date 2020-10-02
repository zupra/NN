<template lang="pug">
.wrap

  //- TODO
  h2(
    style="margin-right: 360px;"
  ) Огромные выбоины на подъездной дороге к ул. Восстания
  #gridAppeals  
    // LeftPart
    .mb-5
      .mb-3.flex
        .Tag.green Статус
        .Tag Ремонтные работы


      .my-4.flex.liteText
        .flex
          img(
            src="https://icongr.am/clarity/map-marker.svg?size=20&color=5085F1"
          )
          .ml-1 ул. Восстания, 217к1с2
        .ml-4 30 февраля 2020

      p.Text Здравствуйте Глеб Сергеевич. Обращаюсь к Вам с проблемой решения об установки шумоизоляционного экрана по Восстания 48/50 со стороны дублера ул. Красносельсой. Напротив дома со ст. Ильинской 149 данный экран установлен. С нашей стороны вдоль дороги отсутствует. Жители дома устали от пыли, грязи и шума. Все жто летит в нашу мторону отражаясь от противоположного экрана. Логичнее было сделать их два, параллельно друг другу, чтобы все гасить. Обращался письменно в Администрацию Нижегородского района и департамент отвечающий за данные сооружения. Без результата. Отписки только. Прошу Вас разобраться и решить данную проблему. Спасибо.


      .flex.my-3
        img(
          src="https://icongr.am/feather/user.svg?size=20&color=5085F1"
        )
        .bold.ml-1 Татьяна Ф.

      .my-4(
        style="height: 300px"
      )
        client-only
          yandex-map(
            style="width: 100%; height: 100%"
            :coords="coords"
            zoom=13
            :scroll-zoom="false"
          )


      .flex.x_sb
        div
          .mb-3.liteText Оценить голосование
          Fingers
        div
          .mb-3.liteText Поделиться в соцсетях
          SocialSharing
            




      .BR

    // RightPart
    .div
      h3 Работы по обращению

      .btn Отслеживать



</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      coords: [56.323851, 44.027802],
      // settings: {},
    }
  },
}
</script>

<style lang="stylus">

#gridAppeals
  display grid
  grid-template-columns: 1fr 360px;
  grid-gap 3rem
</style>

<template lang="pug">
div
  .Intro.flex.x_sb.y_center
    div
      h1 Вместе сделаем 
        br
        | город лучше
      p.subHeader Участвуйте в голосованиях, сообщайте о проблемах
        br
        | и получайте самую актуальную информацию о 
        br
        | происходящем в городе
    img(src="~/static/images/intro_BG.png")
  .flex.mb-3
    .Feature_button.mr-4(
      v-for="(val, key) in {initiatives:'Предложить инициативу', voting:'Участвовать в голосованиях', interactive_map:'Искать информацию на карте'}"
      v-scroll-to="`#${key}`"
    ) {{val}}
</template>

<style lang="stylus">
.Intro
  margin 4rem 0 5rem


.subHeader
  font-size 20px
  color $clr_gladiator

.Feature_button
  cursor pointer
  box-sizing border-box
  background $clr_interstellar
  color #FFF
  font-weight bold
  border-radius: 1em
  padding 50px 1.4em 1em

  width 276px
  // height 138px
  position relative

  transition: filter .4s
  filter: drop-shadow(2px 4px 10px #222);
  &:hover
    // filter: none
    filter: drop-shadow(0 0 16px blue);
  &:before
    content: ''
    position absolute
    top -32px
    width 120px
    height 64px
  &:nth-of-type(1):before
    background: url('~static/images/Lamp.png') no-repeat center;
  &:nth-of-type(2):before
    background: url('~static/images/Vote.png') no-repeat center;
  &:nth-of-type(3):before
    background: url('~static/images/Map.png') no-repeat center;
</style>

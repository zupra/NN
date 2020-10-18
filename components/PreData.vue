<template lang="pug">
.PreData.mb-3
  button.btn_open(@click='open = !open') {{ open ? 'скрыть API' : 'показать API'}}
  .preBlock(
    v-if="open"
  )
    slot

</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="stylus">




.PreData
  background-color: #f4f6f8;
  padding: .5rem 0  0 .5rem ;



.btn_open
  btn()
  display: inline-block;
  margin-bottom .5rem
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.3em .7em;
  color: #FFFFFF;
  background-color: #9555AF;
  &:hover
    color: #9050AA;
    border-color: currentColor;
    background-color: white;
    // box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5), 0 0 0 1.5px rgba(255, 105, 180, 0.5);


.preBlock
  background: rgba(#000, .15);
  height: 40vh;
  overflow: overlay
</style>

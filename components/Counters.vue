<template lang="pug" functional>
.Counters
  .Counters_num {{props.num}}
  .Counters_label {{props.str_1}} 
    br
    | {{props.str_2}}

</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '10',
    },
    str_1: {
      type: String,
      default: 'str_1',
    },
    str_2: {
      type: String,
      default: 'str_2',
    },
  },
}
</script>

<style lang="stylus">
.Counters
  margin-left 2.4rem
  &_num
    font-size 40px
    font-weight bold
    color $clr_rocky
  &_label
    font-size: 13px
    opacity .64
</style>

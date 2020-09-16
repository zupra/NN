<template lang="pug" functional>
.Counters
  div
    .Counters_num {{props.num_1}}
    .Counters_label {{props.str_11}} 
      br
      | {{props.str_12}}
  div
    .Counters_num {{props.num_2}}
    .Counters_label {{props.str_21}} 
      br
      | {{props.str_22}}
</template>

<script>
export default {
  props: {
    num_1: {
      type: String,
      default: '10',
    },
    str_11: {
      type: String,
      default: 'str_1',
    },
    str_12: {
      type: String,
      default: 'str_2',
    },
    //
    num_2: {
      type: String,
      default: '10',
    },
    str_21: {
      type: String,
      default: 'str_1',
    },
    str_22: {
      type: String,
      default: 'str_2',
    },
  },
}
</script>

<style lang="stylus">
.Counters
  display grid
  grid-template-columns: 120px 120px;
  &_num
    font-size 40px
    font-weight bold
    color $clr_rocky
  &_label
    font-size: 13px
    opacity .64
</style>

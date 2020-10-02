<template lang="pug">
.SocialSharing.flex
  ShareNetwork.SocialSharing_item.mr-2(
    v-for="(network,idx) in networks"
    :key="idx"
    :network="network"
    :url="url"
    :title="title"
    :description="description"
    :quote="quote"
    :hashtags="hashtags"
    :twitterUser="twitterUser"
  ) 
    img(
      :src="require(`~/static/SocialSharing_icon/${network}.png`)"
    )

</template>

<script>
export default {
  // https://nicolasbeauvais.github.io/vue-social-sharing/?path=/story/vuesocialsharing--dynamic-data
  props: {
    url: {
      type: String,
      default: 'url',
    },
    title: {
      type: String,
      default: 'title',
    },
    description: {
      type: String,
      default: 'description',
    },
    quote: {
      type: String,
      default: 'quote',
    },
    hashtags: {
      type: String,
      default: 'hashtags',
    },
    twitterUser: {
      type: String,
      default: 'twitterUser',
    },
  },

  data() {
    return {
      networks: ['vk', 'facebook', 'odnoklassniki'],
    }
  },
}
</script>

<style lang="stylus">
.SocialSharing
  &_item
    cursor pointer
    filter: drop-shadow(1px 2px 2px #999);
    // box-shadow: 1px 2px 2px #777 // $clr_alien
    &:hover
      filter:  drop-shadow(1px 2px 2px #666) brightness(1.4);
      transform: translateY(-1px);
</style>

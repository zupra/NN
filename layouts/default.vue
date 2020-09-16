<template lang="pug">
div
  .wrap
  
    TopNav
    //- pre {{$route}}
    .breadcrumbs
      N-link.breadcrumbs_item(
        to="/"
      ) Главная /

  <Nuxt />

  Footer

</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    /*
    crumbs() {
      const crumbs = []
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        crumb.name = this.$i18n.t('route.' + (item.name || item.path))

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, '')),
            })
            crumb.path = this.$route.path
            crumb.name = this.$i18n.t('route.' + this.$route.name, [
              crumb.path.match(/[^/]*$/)[0],
            ])
          }
          crumb.classes = 'is-active'
        }

        crumbs.push(crumb)
      })

      return crumbs
    },
    */
  },
}
</script>

<style lang="stylus">

.Page
  min-height 50vh


.breadcrumbs
  font-size: 13px;
  margin 3rem 0 .5rem
  &_item
    color $clr_titanic //#E5E5E5
    opacity: 0.32;
    text-decoration none
</style>

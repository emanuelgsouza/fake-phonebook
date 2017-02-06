<template>
  <div class="columns is-centered">
    <div class="column is-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { storage } from './helpers'

export default {
  name: 'app',
  mounted () {
    storage()
  }
}
</script>

<style lang="sass">
  @import "../node_modules/bulma/sass/utilities/variables"
  @import "../node_modules/bulma/sass/utilities/mixins"
  @import "../node_modules/bulma/sass/grid/columns"
  @import "../node_modules/bulma/sass/base/minireset"
  @import "../node_modules/bulma/sass/base/generic"

  .column
    position: relative
</style>

<template>
  <div class="container-menu">
    <ui-fab
      icon="menu"
      size="normal"
      type="primary"
      @click="classToggle = !classToggle">
    </ui-fab>
    <router-link to="/add">
      <ui-fab
        class="menu add"
        :class="{ 'is-active': classToggle }"
        icon="add"
        size="normal"
        color="green"
        type="primary">
      </ui-fab>
    </router-link>
    <router-link to="/search">
      <ui-fab
        class="menu search"
        :class="{ 'is-active': classToggle }"
        icon="search"
        size="normal"
        color="primary"
        type="primary">
      </ui-fab>
    </router-link>
    <router-link to="/home">
      <ui-fab
        class="menu home"
        :class="{ 'is-active': classToggle }"
        icon="home"
        size="normal"
        color="primary"
        type="primary">
      </ui-fab>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return { classToggle: false }
  }
}
</script>

<style lang="sass" scoped>
  $top: 2em
  $left: 2.5em

  .container-menu
    position: absolute
    top: $top
    left: $left

  .menu
    position: absolute
    bottom: 0
    right: 0
    opacity: 0
    transition: all .3s ease
    z-index: -2

  .menu.is-active
    opacity: 1
    z-index: 0

    &.add
      left: $left + 1.7em

    &.search
      left: $left + 6em

    &.home
      top: $top + 2.2em

</style>

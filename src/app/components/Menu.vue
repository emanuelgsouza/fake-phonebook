<template>
  <div class="container-menu">
    <ui-icon-button
      icon="menu"
      size="large"
      type="primary"
      @click="classToggle = !classToggle">
    </ui-icon-button>
    <router-link to="/add">
      <ui-icon-button
        class="menu add"
        :class="{ 'is-active': classToggle }"
        icon="add"
        size="large"
        color="green"
        type="primary">
      </ui-icon-button>
    </router-link>
    <router-link to="/search">
      <ui-icon-button
        class="menu search"
        :class="{ 'is-active': classToggle }"
        icon="search"
        size="large"
        color="primary"
        type="primary">
      </ui-icon-button>
    </router-link>
    <router-link to="/home">
      <ui-icon-button
        class="menu home"
        :class="{ 'is-active': classToggle }"
        icon="home"
        size="large"
        color="primary"
        type="primary">
      </ui-icon-button>
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
    z-index: -2

  .menu.is-active
    opacity: 1
    z-index: 0

    &.add
      left: $left + 1.3em

    &.search
      left: $left + 5em

    &.home
      top: $top + 1.8em

</style>

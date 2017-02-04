<template>
  <router-link to="/home">
    <ui-fab
      class="button-add"
      color="primary"
      icon="add"
      size="normal">
    </ui-fab>
  </router-link>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  $tam: 1.5em
  .button-add
    position: absolute
    bottom: $tam
    right: $tam
</style>

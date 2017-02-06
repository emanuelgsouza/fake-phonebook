<template>
  <div class="contact">
    <Avatar
      class="avatar"
      :username="contactObject.Nome"
      :src="contactObject.avatar"></Avatar>
    <p> {{ contactObject.Nome }} </p>
    <ui-checkbox
      class="checkbox"
      v-model="value"
      ></ui-checkbox>
  </div>
</template>

<script>
import Avatar from 'vue-avatar/dist/Avatar'

export default {
  name: 'contact-td',
  data () { return { value: [] } },
  components: { Avatar },
  props: ['contactObject']
}
</script>

<style lang="sass" scoped>
  .contact
    width: 100%
    position: relative
    margin: .5em 0
    padding: .4em .5em
    border-radius: 2px
    box-shadow: 1px 1px 10px black

    & p
      position: absolute
      top: 1em
      left: 5em

    & .checkbox
      position: absolute
      top: 1.3em
      right: 1.5em
</style>

<template>
  <div class="contact">
    <Avatar
      class="avatar"
      :username="contactObject.Nome"
      :src="contactObject.avatar"></Avatar>
    <p> {{ contactObject.Nome }} </p>
    <ui-fab
      class="btn-info"
      color="primary"
      icon="info"
      size="small"
      @click="$refs['modal'].open()"></ui-fab>
    <ui-checkbox
      class="checkbox"
      v-model="value"
      ></ui-checkbox>

    <ui-modal
      ref="modal"
      title="Mostrando os dados do contato:"
      transition="scale">
      <ul>
        <li v-for="(value, key) in contactObject"> {{ key }} - {{ value }} </li>
      </ul>
    </ui-modal>
  </div>
</template>

<script>
import Avatar from 'vue-avatar/dist/Avatar'

export default {
  name: 'contact-td',
  data () { return { value: [] } },
  components: { Avatar },
  props: ['contactObject'],
  watch: {
    value () {
      if (this.value) {
        this.$emit('changeValue', true, this.contactObject.Nome)
      } else {
        this.$emit('changeValue', false, this.contactObject.Nome)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .contact
    width: 100%
    position: relative
    margin: .5em 0
    padding: .4em .5em
    border-radius: 2px
    box-shadow: .5px .5px 5px black

    & p
      position: absolute
      top: 1em
      left: 5em

    & .checkbox
      position: absolute
      top: 1.3em
      right: 1.5em

    & .btn-info
      position: absolute
      top: 1em
      right: 4em
</style>

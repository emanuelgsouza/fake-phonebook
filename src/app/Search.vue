<template>
  <div>
    <HomeHeader label="Pesquisar Contato"></HomeHeader>
    <div class="content">
      <ui-textbox
        v-validate="'alpha_spaces'"
        name="nome"
        :invalid="errors.has('nome')"
        label="Nome"
        type="text"
        placeholder="Digite um nome para pesquisa"
        v-model="name"></ui-textbox>
      <hr>
      <transition name="fade">
        <ui-button
          v-if="selecteds.length !== 0"
          type="primary"
          color="red"
          icon="delete"
          iconPosition="left"
          size="large"
          @click="deleteSelecteds"> Deletar Selecionados </ui-button>
      </transition>
      <hr>
      <Contact
        v-for="contact in contacts"
        :contactObject="contact"
        @changeValue="changeSelecteds"></Contact>
    </div>
    <HomeMenu></HomeMenu>
    <FooterHome></FooterHome>
  </div>
</template>

<script>
import { returnAllContacts } from '../helpers'
import HomeHeader from './components/Header'
import HomeMenu from './components/Menu'
import Contact from './components/Contact'
import FooterHome from './components/Footer'

export default {
  name: 'search',
  components: { HomeHeader, Contact, HomeMenu, FooterHome },
  data () {
    return {
      name: '',
      contacts: [],
      contactsCopy: [],
      selecteds: []
    }
  },
  methods: {
    changeSelecteds () {
      if (arguments[0]) {
        this.selecteds.push(arguments[1])
      } else {
        const pos = this.selecteds.indexOf(arguments[1])
        this.selecteds.splice(pos, 1)
      }
    },
    deleteSelecteds () {
      const contactsFilter = this.contacts.filter(contact => {
        return this.selecteds.indexOf(contact.Nome) === -1
      })
      this.selecteds = []
      this.contacts = contactsFilter
    }
  },
  watch: {
    name () {
      const name = arguments[0]
      if (name !== '') {
        const result = this.contactsCopy.filter(contact => {
          return contact.Nome.indexOf(name) !== -1
        })
        this.contacts = result
      } else {
        this.contacts = this.contactsCopy
      }
    }
  },
  mounted () {
    this.contacts = returnAllContacts()
    this.contactsCopy = this.contacts
  }
}
</script>

<style lang="sass" scoped>
  div.content
    font-size: 1.2em
    padding: .5em .8em

  .fade-enter-active
    transition: all .3s ease

  .fade-leave-active
    transition: all .3s ease

  .fade-enter, .fade-leave-to
    transform: translateX(-100%)
    opacity: 0

</style>

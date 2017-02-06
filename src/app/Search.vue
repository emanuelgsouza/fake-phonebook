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
        placeholder="Digite um nome para pesquisa" v-model="name"></ui-textbox>
      <hr>
      <Contact
        v-for="contact in contacts"
        :contactObject="contact"></Contact>
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
  name: 'add',
  components: { HomeHeader, Contact, HomeMenu, FooterHome },
  data () {
    return {
      name: '',
      contacts: []
    }
  },
  methods: {},
  mounted () { this.contacts = returnAllContacts() }
}
</script>

<style lang="sass" scoped>
  div.content
    font-size: 1.2em
    padding: .5em .8em
</style>

<template>
  <div>
    <HomeHeader label="Adicionar Contato"></HomeHeader>
    <div class="content">
      <ui-textbox
        v-validate="'required|alpha_spaces'"
        name="nome"
        error="Não digite número, somente letras e / ou espaços"
        help="Este campo é requerido"
        :invalid="errors.has('nome')"
        floating-label
        label="Digite o nome"
        placeholder="Enter your name"
        v-model="name"></ui-textbox>

      <ui-textbox
        v-validate="'required|alpha_num'"
        name="number"
        error="Digite somente número, máximo de 9 dígitos"
        :maxlength="9"
        help="Este campo é requerido"
        :invalid="errors.has('number') || number.length < 8 || number.length > 9"
        floating-label
        label="Digite o número de telefone"
        type="tel"
        placeholder="Enter your name"
        v-model="number"></ui-textbox>

      <ui-textbox
        v-validate="'required|email'"
        name="email"
        error="Digite um email válido"
        help="Este campo é requerido"
        :invalid="errors.has('email')"
        floating-label
        label="Digite o email"
        type="email"
        placeholder="Enter your name"
        v-model="email"></ui-textbox>

      <label> Data de aniversário: </label>
      <myDatepicker
        :date="{}"
        :option="option"
        @change="birthday = arguments[0]"></myDatepicker>
    </div>

    <ui-button
      class="btn-confirm"
      color="green"
      size="large"
      buttonType="button"
      @click="openModal"> Confirmar Contato </ui-button>

      <ui-modal
        ref="modal"
        :title="title">
        <h2> Dados: </h2>
        <ul>
          <li v-for="(value, key) in contact"> {{ key }} - {{ value }} </li>
        </ul>

        <div slot="footer">
            <ui-button
            size="large"
            color="primary"
            @click="closeModal">Close</ui-button>
        </div>
      </ui-modal>
    <HomeMenu></HomeMenu>
    <FooterHome></FooterHome>
  </div>
</template>

<script>
import { insertContact } from '../helpers'
import HomeHeader from './components/Header'
import HomeMenu from './components/Menu'
import FooterHome from './components/Footer'
import myDatepicker from 'vue-datepicker'

export default {
  name: 'add',
  components: { HomeHeader, FooterHome, HomeMenu, myDatepicker },
  data () {
    return {
      name: '',
      number: '',
      email: '',
      birthday: '',
      contact: {},
      title: '',
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'DD-MM-YYYY',
        placeholder: 'Data de Aniversário',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        }
      }
    }
  },
  methods: {
    openModal () {
      if (this.errors.errors.length !== 0) {
        this.title = 'Não é possível inserir os dados, há erro com eles'
      } else {
        if (this.name === '' || this.birthday === '' || this.email === '' || this.number === '') {
          this.title = 'Não é possível inserir os dados, há campos em branco'
        } else {
          this.title = 'Contato adicinado com sucesso'
          const contact = {
            Nome: this.name,
            Aniversario: this.birthday,
            Email: this.email,
            Telefone: this.number
          }
          this.contact = contact
          insertContact(contact)
        }
      }
      this.$refs['modal'].open()
    },
    closeModal () {
      this.$refs['modal'].close()
    }
  }
}
</script>

<style lang="sass" scoped>
  div.content
    font-size: 1.2em
    padding: .5em .8em

  .btn-confirm
    margin: 1em

  h2
    font-size: 1.6em
    font-weight: bolder

  li
    font-size: 1.4em

  .input.is-danger
    color: red
    border-color: red
</style>

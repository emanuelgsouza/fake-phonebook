<template>
  <div>
    <HomeHeader label="Home"></HomeHeader>
    <div class="content">
      <p> Bem vindo ao Fake-Phonebook, uma pequena aplicação que visa a simular uma pequena agenda telefonica. Foram utilizados a seguinte stack: </p>
      <ul>
        <li>
          <a href="https://vuejs.org">Vue.js</a>
        </li>
        <li>
          <a href="https://github.com/JosephusPaye/Keen-UI">Keen-UI</a>
        </li>
        <li>
          <a href="http://bulma.io/">Bulma</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/vue-router">Vue-Router</a>
        </li>
        <li>
          <a href="https://github.com/niksmr/vue-masked-input">Vue-masked-input</a>
        </li>
        <li>
          <a href="https://github.com/logaretm/vee-validate">Vee-validate</a>
        </li>
        <li>
          <a href="https://github.com/hilongjw/vue-datepicker">Vue-datepiker</a>
        </li>
        <li>
          <a href="https://github.com/eliep/vue-avatar">Vue-avatar</a>
        </li>
        <li>
          <a href="https://github.com/mzabriskie/axios">Axios</a>
        </li>
        <li>
          <a href="https://uinames.com/">UI-Names</a>
        </li>
      </ul>
    </div>
    <HomeMenu></HomeMenu>
    <FooterHome></FooterHome>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeMenu from './components/Menu'
import FooterHome from './components/Footer'

export default {
  name: 'home',
  components: { HomeHeader, HomeMenu, FooterHome }
}
</script>

<style lang="sass" scoped>
  div.content
    font-size: 1.2em
    padding: .5em .8em
</style>

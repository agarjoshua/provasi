<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <HomePage/>

    <Search/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>

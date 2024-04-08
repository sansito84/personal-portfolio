<template>
  <div id="app">
        <NavBar></NavBar>
        <!-- Masthead-->
        <Header></Header>
        <!-- Skills-->
        <Skills></Skills>
        <!-- Portfolio-->
        <Portfolio></Portfolio>
        <!-- Contact-->
        <Contact></Contact>
        <!-- Email -->
        <Email></Email>
        <!-- Footer-->
        <Footer></Footer>  
 
    </div>
</template>

<script>

import NavBar from './components/NavBar-Component.vue'
import Header from './components/Header-Component.vue'
import Portfolio from './components/Portfolio-Component.vue'
import Skills from './components/Skills-Component.vue'
import Contact from './components/Contact-Component.vue'
import Footer from './components/Footer-Component.vue'
import Email from './components/Email-Component.vue'




export default {
  components: { NavBar, Header, Skills, Contact, Footer, Email, Portfolio },
  name: 'App' 
   
}

</script>
<style>
#app > .Header {
  z-index: 1;
}
#app > .Skills {
  z-index: 99;
}
</style>
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

import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Portfolio from './components/Portfolio.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Email from './components/Email.vue'



export default {
  components: { NavBar, Header, Skills, Contact, Footer, Email, Portfolio },
  name: 'App' 
   
}

</script>
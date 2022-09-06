<template>
  <div id="app">
        <NavBar></NavBar>
        <!-- Masthead-->
        <Header></Header>
        <!-- About-->
        <About></About>
        <!-- Services-->
        <Services></Services>
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
import Services from './components/Services.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Email from './components/Email.vue'


export default {
  components: { NavBar, Header, About, Services, Contact, Footer, Email },
  name: 'App' 
   
}

</script>
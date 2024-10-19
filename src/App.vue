<template>
    <div id="app">
        <NavBar></NavBar>
        <!-- Masthead-->
        <Header></Header>
        <!-- Skills-->
        <Skills></Skills>
        <!-- Softskills -->
        <Softskills></Softskills>
        <!-- Portfolio-->
        <Portfolio></Portfolio>
        <!-- Education -->
        <Edu></Edu>
        <!-- Contact-->
        <Contact></Contact>
        <!-- Email -->
        <Email></Email>
        <!-- Footer-->
        <Footer></Footer>
        <!-- Chatbot -->
         <Chatbot></Chatbot>
    </div>
</template>

<script>
    import NavBar from "./components/NavBar-Component.vue";
    import Header from "./components/Header-Component.vue";
    import Portfolio from "./components/Portfolio-Component.vue";
    import Skills from "./components/Skills-Component.vue";
    import Softskills from "./components/Softskills-Component.vue";
    import Edu from "./components/Edu-Component.vue";
    import Contact from "./components/Contact-Component.vue";
    import Footer from "./components/Footer-Component.vue";
    import Email from "./components/Email-Component.vue";
    import Chatbot from "./components/Chatbot-Component.vue";

    export default {
        components: {
            NavBar,
            Header,
            Skills,
            Softskills,
            Edu,
            Contact,
            Footer,
            Email,
            Portfolio,
            Chatbot

        },
        name: "App",

        mounted() {
            // Primero, selecciona todos los elementos que quieres observar
            let elementos = this.$el.querySelectorAll(".animate__animated");

            // Luego, crea una nueva instancia de IntersectionObserver
            let observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // Si el elemento está en la vista del usuario
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__heartBeat");
                    } else {
                        // Si el elemento no está en la vista del usuario, haz lo contrario
                        entry.target.classList.remove("animate__heartBeat");
                    }
                });
            });

            // Finalmente, inicia la observación de cada uno de los elementos
            elementos.forEach((elemento) => {
                observer.observe(elemento);
            });
        },
    };
</script>

<style>
    #app > .Header {
        z-index: 1;
    }
    #app > .Skills {
        z-index: 99;
    }
</style>

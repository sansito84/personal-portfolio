<template>
  <header class="masthead bg-black h-100 py-5">

    <div class="container h-100">
      <div class="wrapper">
      <div class="gradient gradient-1"></div>
      <div class="gradient gradient-2"></div>
      <div class="gradient gradient-3"></div>
    </div>
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-8 align-self-end">
          <img
            class="img-fluid rounded-circle mb-4 border border-3 h-25 w-25 shadow-xl"
            :src="image"            
          />
          <h1 class="text-white">Sansito Dev</h1>
          <hr class="divider text-white" />
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white mb-2">My name is - Mi nombre es</p>
          <h4 class="text-white">Santiago Sito</h4>
          <p class="text-white mb-2">
            Front-End developer road to Full-Stack - Desarrollador Front-End
            camino a Full-Stack
          </p>
          <p class="text-white mb-5">
            IT Lead - Front-end developer at/en
            <a
              class="text-blue mb-5"
              href="https://covery.tech"
              target="_blank"
              >Covery Tech</a
            >
          </p>

          <a class="btn btn-primary btn-xl" href="#about">Conoceme más!</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data: () => ({
      image: "./ssdev.jpg",
    }),
  };
</script>

<style lang="scss"></style>

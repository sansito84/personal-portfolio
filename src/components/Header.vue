<template>
  <header class="masthead">
    <div class="container px-4 px-lg-5 h-100">
      <video
        src="https://player.vimeo.com/external/368789132.hd.mp4?s=33600fce2f968c7b3778ec3439df7d655a6f7585&profile_id=172&oauth2_token_id=57447761"
        autoplay="true"
        muted="true"
        loop="true"
        poster=""
      ></video>
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-8 align-self-end">
          <img
            class="img-fluid rounded-circle mb-4 border border-3 h-25 w-25"
            :src="image"
          />
          <h1 class="text-white font-weight-bold">Sansito Dev</h1>
          <hr class="divider" />
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white mb-2">
            Mi nombre es <h4 class="text-white">Santiago Sito</h4>
          </p>
          <p class="text-white-75 mb-2">
            Desarrollador Front-End camino a Full-Stack
          </p>
          <p class="text-white-75 mb-5">
            IT Lead - Front-end developer en
            <a
              class="text-white-50 mb-5"
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

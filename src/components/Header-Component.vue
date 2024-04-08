<template>
  <header class="masthead bg-black h-100">
    <div class="wrapper">
      <div class="gradient gradient-1"></div>
      <div class="gradient gradient-2"></div>
      <div class="gradient gradient-3"></div>
    </div>
    <div class="container h-100">
      <div
        class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"
      >
        <div class="col-lg-8 align-self-end">
          <img
            class="img-fluid rounded-circle mb-4 border border-3 h-25 w-25 shadow-xl"
            :src="image"
          />          
          <hr class="divider text-white" />
        </div>
        <div class="col-lg-8 align-self-baseline text-white">
          <p class=" mb-2">My name is - Mi nombre es</p>
          <h4 >Santiago Sito</h4>
          <p class="mb-2">
            Experienced front-end and back-end developer proficient in deployment technologies like PM2, Nginx, and Ubuntu. Knowledgeable in Docker, Kubernetes, and CI/CD using GitHub Actions and Python. Strong problem-solving abilities and proven IT team leadership.
          </p>
          <p class="mb-2">
            Desarrollador experimentado en front-end y back-end, hábil en tecnologías de implementación como PM2, Nginx y Ubuntu. Conocimientos en Docker, Kubernetes y CI/CD con GitHub Actions y Python. Fuertes habilidades de resolución de problemas y liderazgo de equipos de IT comprobado.          </p>
          <p class="mb-5">
            Former IT Lead - Front-end developer at/en
            <a class="mb-5" href="https://covery.tech" target="_blank"
              >Covery Tech</a
            >
          </p>

          <a class="btn btn-primary btn-xl shadow-lg bg-body text-black" href="#about">Conoceme más!</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data: () => ({
      image: "./ssdev.png",
    }),
  };
</script>

<style lang="css">
  body {
    margin: 0;
    color: #fff;
    background-color: #000;
    padding: 0;
  }
  @media (min-width: 992px) {
    header.masthead {
      height: 100vh;
      min-height: 40rem;
      padding-top: 4.5rem;
      padding-bottom: 0;
    }
    header.masthead p {
      font-size: 1.15rem;
    }
    header.masthead h1,
    header.masthead .h1 {
      font-size: 3rem;
    }
  }
  header .masthead {
    position: absolute;
    padding-top: 25rem;
    padding-bottom: calc(10rem - 4.5rem);
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    background-color: rgb(255, 255, 255);
    color: rgb(253, 253, 253);
    z-index: 2;
  }
  header .masthead h1,
  header .masthead .h1 {
    font-size: 2.25rem;
    text-shadow: 0 0 20px rgb(255, 254, 254);
    z-index: 2;
  }
  .masthead .container {
    padding-top: 3rem;
    position: relative;
    z-index: 2;
    background-color: transparent;
    padding-bottom: 3rem;
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    filter: blur(120px);
    z-index: 1;
  }

  .gradient {
    position: absolute;
    border-radius: 100%;
    opacity: 0.6;
    mix-blend-mode: screen;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    background-color: #000;
  }

  .gradient-1 {
    background: rgb(0, 255, 21);
    width: 700px;
    height: 700px;
    animation-duration: 11s;
    opacity: 0.6;
    left: 60%;
    top: 40%;
    z-index: -2;
    animation-name: animation-gradient-1;
  }

  .gradient-2 {
    background: rgb(154, 0, 243);
    width: 600px;
    height: 600px;
    animation-duration: 11s;
    opacity: 0.6;
    left: 40%;
    top: 60%;
    z-index: -1;
    animation-name: animation-gradient-2;
  }

  .gradient-3 {
    background: rgb(29, 1, 187);
    width: 500px;
    height: 500px;
    animation-duration: 11s;
    opacity: 0.6;
    left: 50%;
    top: 50%;
    z-index: -3;
    animation-name: animation-gradient-3;
  }

  @keyframes animation-gradient-1 {
    0% {
      transform: translateY(-50%) translateX(-50%) rotate(-20deg)
        translateX(20%);
    }
    25% {
      transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
        rotate(80deg) translateX(30%);
    }
    50% {
      transform: translateY(-50%) translateX(-50%) rotate(180deg)
        translateX(25%);
    }
    75% {
      transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
        rotate(240deg) translateX(15%);
    }
    100% {
      transform: translateY(-50%) translateX(-50%) rotate(340deg)
        translateX(20%);
    }
  }

  @keyframes animation-gradient-2 {
    0% {
      transform: translateY(-50%) translateX(-50%) rotate(40deg)
        translateX(-20%);
    }
    25% {
      transform: translateY(-50%) translateX(-50%) skew(15deg, 15deg)
        rotate(110deg) translateX(-5%);
    }
    50% {
      transform: translateY(-50%) translateX(-50%) rotate(210deg)
        translateX(-35%);
    }
    75% {
      transform: translateY(-50%) translateX(-50%) skew(-15deg, -15deg)
        rotate(300deg) translateX(-10%);
    }
    100% {
      transform: translateY(-50%) translateX(-50%) rotate(400deg)
        translateX(-20%);
    }
  }

  @keyframes animation-gradient-3 {
    0% {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
    20% {
      transform: translateY(-50%) translateX(-50%) translateX(20%)
        translateY(-30%);
    }
    40% {
      transform: translateY(-50%) translateX(-50%) translateX(-25%)
        translateY(-15%);
    }
    60% {
      transform: translateY(-50%) translateX(-50%) translateX(30%)
        translateY(20%);
    }
    80% {
      transform: translateY(-50%) translateX(-50%) translateX(5%)
        translateY(35%);
    }
    100% {
      transform: translateY(-50%) translateX(-50%) translateX(-15%)
        translateY(10%);
    }
  }
</style>

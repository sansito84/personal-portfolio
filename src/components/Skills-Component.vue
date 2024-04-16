<template>
  <section class="page-section bg-primary py-5" id="about">
    <div class="container text-center">
      <h2 class="text-white animate__animated my-5">Skills!</h2>
      <div class="row bg-body rounded-4 shadow-lg d-flex py-3">
        <div v-for="(column, index) in columns" :key="index" class="col-md-4">
          <div
            v-for="(skill, i) in column"
            :key="i"
            class="skill-item mx-2"
            @mouseenter="showBackgroundImage(skill)"
            @mouseleave="hideBackgroundImage(skill)"
          >
            <div class="skill-content">
              <div class="d-flex justify-content-center">
                <h3>
                  {{ skill.name }}
                  <icon :icon="skill.icon" style="font-size: 2.5rem"></icon>
                </h3>
              </div>
              <h5>{{ skill.level }}</h5>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  :style="'width: ' + skill.progress + '%;'"
                  :aria-valuenow="skill.progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div
              v-if="skill.showBackground"
              class="background-image"
              :style="{ backgroundImage: 'url(' + skill.backgroundImage + ')' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import skillsData from "../services/skills.json";

  export default {
    components: {
      Icon,
    },
    data() {
      return {
        skills: [],
        columns: [],
      };
    },
    mounted() {
      this.skills = skillsData;
      this.columns = this.chunkArray(
        this.skills,
        Math.ceil(this.skills.length / 3)
      );
    },
    methods: {
      chunkArray(array, size) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
      },
      showBackgroundImage(skill) {
        skill.showBackground = true;
      },
      hideBackgroundImage(skill) {
        skill.showBackground = false;
      },
    },
  };
</script>

<style>
  .skill-item {
    position: relative;
    padding: 15px;
    border-radius: 8px;
    color: black;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-bottom: 0.3rem;
    overflow: hidden;
  }

  .skill-content {
    position: relative;
    z-index: 2;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 0.3s ease;
    opacity: 0;
    z-index: 1;
  }

  .skill-item:hover .background-image {
    opacity: 0.3;
    z-index: 1;
  }

  .skill-item:hover {
    transform: scale(1.3);
    z-index: 99;
    box-shadow: 10px 5px 35px rgba(0, 0, 0, 0.5);
  }
</style>

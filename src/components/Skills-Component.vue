<template>
  <section class="page-section bg-primary py-5" id="about">
    <div class="container text-center">
      <h2 class="text-white animate__animated my-5">Skills!</h2>
      <div class="row bg-body rounded-4 shadow-lg gap-1">
        <div v-for="(column, index) in columns" :key="index" class="col my-3">
          <div
            v-for="(skill, i) in column"
            :key="i"
            class="skill-item mx-2"            
            
          >
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
    },
  };
</script>

<style>
.skill-item {
  padding: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 0.3rem;
}
  .skill-item:hover {
    transform: scale(1.5);
  }
  
  template {
    background-color: aqua;
  }
</style>

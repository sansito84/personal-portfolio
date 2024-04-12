<template>
  <section class="page-section bg-primary py-5" id="about">
    <div class="container text-center">
      <h2 class="text-white animate__animated my-5">Soft Skills!</h2>
      <div class="row bg-body rounded-4 shadow-lg">
        <div v-for="(column, index) in columns" :key="index" class="col-md-4 my-3">
          <div v-for="(skill, i) in column" :key="i" class="sskill-item">
            <div class="d-flex justify-content-center align-items-center">
              <icon :icon="skill.icon" style="font-size: 2.5rem; margin-right: 10px;"></icon>
              <h3 class="mb-0">{{ skill.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
import skillsData from "../services/softskills.json";

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
    this.columns = this.chunkArray(this.skills, Math.ceil(this.skills.length / 3));
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
.sskill-item {
  padding: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 0.3rem;
}


.page-section {
  background-color: #f8f9fa !important;
}

.page-section h2 {
  font-size: 2.5rem;
}
.sskill-item:hover {
  z-index: 99;
  transform: translateY(-5px) translateX(-10px);
  
}

.sskill-item h3 {
  font-size: 1.5rem;
  margin-left: 10px;
  color: #333333;
}

</style>

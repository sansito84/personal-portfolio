<template>
  <section class="page-section bg-primary py-5" id="courses">
    <div class="container text-center">
      <h2 class="text-white animate__animated my-5">Education</h2>
      <div class="row bg-body rounded-4 shadow-lg d-flex py-3">
        <div v-for="(course, index) in courses" :key="index" class="col-md-4">
          <div class="course-item">
            <h3>{{ course.course }}</h3>
            <h5>{{ course.institute }}</h5>
            <p>{{ course.summary }}</p>
            <p>{{ course.date }}</p>
          </div>
        </div>
        <div
          v-if="courses.length < 6"
          :key="`empty-column`"
          class="col-md-4"
        ></div>
      </div>
    </div>
  </section>
</template>


<script>
  import coursesData from "../services/courses.json";

  export default {
    data() {
      return {
        courses: [],
      };
    },
    mounted() {
      this.courses = coursesData;
    },
  };
</script>

<style>
  .course-item {
    padding: 15px;
    border-radius: 8px;
    color: #000;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    margin-bottom: 0.3rem;
  }
  .course-item:hover {
    transform: translateY(-5px) translateX(-5px);
  }
</style>

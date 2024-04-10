<template>
  <section class="page-section bg-primary py-5" id="services">
    <div class="container px-4 px-lg-5 text-center">
      <h2 class="text-center text-white mt-0 mb-3 animate__animated">
        Portfolio
      </h2>

      <swiper
        class="shadow-lg w-100 bg-light rounded-4"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :zoom="true"
      >
        <swiper-slide v-for="(obj, key) in servicesJSON" :key="key">
          <div class="">
            <a
              class="btn btn-secondary mt-3 mb-5 rounded-3"
              v-bind:href="obj.href"
              target="_blank"
              style=""
            >
              <div class="mt-4">
                <div class="mb-4">
                  <img
                    class="services-img rounded-2"
                    style="width: 50vw"
                    :src="'./' + obj.img + '.jpg'"
                    :alt="obj.caption"
                  />
                </div>
                <h3 class="h4 mb-4">Cliente: {{ obj.header }}</h3>
                <h6 class="mb-2">{{ obj.caption }}</h6>
                <h6 class="mb-4 font-monospace">
                  {{ obj.description }}
                </h6>
              </div>
            </a>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";
  import services from "../services/services.json";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/zoom";

  export default {
    data: () => ({
      servicesJSON: services
    }),
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log("slide change");
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y, Zoom],
      };
    },
  };
</script>

<style type="text/css"></style>

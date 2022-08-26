<template>    
    <section class="page-section" id="services" >
        <div class="container px-4 px-lg-5">
            <h2 class="text-center mt-0">Portfolio</h2>
            <hr class="divider"/>            
                    <swiper
                        class="shadow-lg rounded-3"
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="50"
                        navigation
                        :pagination="{ clickable: true }"                        
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide v-for="(obj, key) in servicesJSON" :key="key">
                        <div class="">
                            <a class="btn btn-primary" href="" style="">
                            <div class="mt-4 rounded">
                                <div class="mb-4"><img class="services-img rounded" style="height: 200px" :src="'./'+ obj.img +'.jpg'" :alt="obj.caption"/></div>
                                <h3 class="h4 mb-4">Cliente: {{ obj.header }}</h3>                        
                                <h6 class="mb-2">{{ obj.caption }}</h6>
                                <h6 class="mb-4 font-monospace">{{ obj.description }}</h6>
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
//   Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  import 'swiper/css'
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

export default {
    data: () => ({
        servicesJSON:[
            {
                img: 'boca',
                caption: 'Prototipo operativo "Market Seguros de Boca"',
                header:'Covery',
                description:'HTML, CSS'
            },
            {
                img: 'boston',
                caption: 'Prototipo operativo "Market Seguros de Boston"',
                header:'Covery',
                description:'HTML, CSS'
            },
            {
                img: 'libra',
                caption: 'Prototipo operativo "Market Seguros de Libra"',
                header:'Covery',
                description:'VUE, Bootstrap'
            },
            {
                img: 'aeropuertos',
                caption: 'Prototipo operativo "Market Seguros de Aeropuertos Argentina"',
                header:'Covery',
                description:'HTML, Bootstrap'
            }
        ]
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
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
};




</script>


<style type="text/css">

</style>
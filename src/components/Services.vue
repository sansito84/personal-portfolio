<template>
    <section class="page-section" id="services" >
        <div class="container px-4 px-lg-5">
            <h2 class="text-center mt-0">At Your Service</h2>
            <hr class="divider"/>
            <div class="row">
                <div class="row text-center">
                    <div class="col mb-2 mt-4" v-for="(obj, key) in servicesJSON" :key="key">
                        <div class="mb-4"><img style="height: 150px" :src="'./'+ obj.img +'.jpg'" :alt="obj.caption"/></div>
                        <h3 class="h4 mb-4">{{ obj.header }}</h3>                        
                        <h6 class="mb-0">{{ obj.caption }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        servicesJSON:[
            {
                img: 'jake',
                caption: 'Tasson',
                header:'Yah',

            },
            {
                img: 'ayo',
                caption: 'Teake',
                header:'Golo',
            },
            {
                img: 'jimmy',
                caption: 'Flash',
                header:'Taution',
            },
            {
                img: 'jimmy',
                caption: 'Flash',
                header:'Taution',
            }
        ]
    })
}
</script>

<style type="text/css">

</style>
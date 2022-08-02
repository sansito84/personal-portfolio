<template>
    <section class="page-section" id="services" >
        <div class="container px-4 px-lg-5">
            <h2 class="text-center mt-0">Portfolio</h2>
            <hr class="divider"/>
            <div class="row">
                <div class="row text-center">
                    <div class="col-3 mb-2 mt-4 shadow p-3 rounded-3" v-for="(obj, key) in servicesJSON" :key="key">
                        <div class="mb-4"><img style="height: 100px" :src="'./'+ obj.img +'.png'" :alt="obj.caption"/></div>
                        <h3 class="h4 mb-4">Cliente: {{ obj.header }}</h3>                        
                        <h6 class="mb-2">{{ obj.caption }}</h6>
                        <h6 class="mb-0 font-monospace">{{ obj.description }}</h6>
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
                img: 'boca',
                caption: 'Prototipo "Página web de Boca"',
                header:'Covery',
                description:'HTML, CSS'
            },
            {
                img: 'boston',
                caption: 'Prototipo "Página web de Boston"',
                header:'Covery',
                description:'HTML, CSS'
            },
            {
                img: 'libra',
                caption: 'Prototipo "Página web de Libra"',
                header:'Covery',
                description:'VUE, Bootstrap'
            },
            {
                img: 'aeropuertos',
                caption: 'Prototipo "Página web de Aeropuertos Argentina"',
                header:'Covery',
                description:'HTML, Bootstrap'
            }
        ]
    })
}
</script>

<style type="text/css">

</style>
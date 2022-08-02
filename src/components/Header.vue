<template>
    <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
            <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-8 align-self-end" >
                    <img class="img-fluid rounded-circle shadow mb-4 border border-3 h-25 w-25" :src="image">
                    <h1 class="text-white font-weight-bold">Sansito Dev</h1>
                    <hr class="divider" />
                </div>
                <div class="col-lg-8 align-self-baseline">
                    <p class="text-white-75 mb-5">A partir de </p>
                    <a class="btn btn-primary btn-xl" href="#about">Conoceme más!</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        image: './ssdev.jpg'
    })
}
</script>

<style lang="scss">

</style>

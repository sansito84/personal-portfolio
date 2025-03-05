<template>
    <nav class="navbar navbar-expand-lg bg-light fixed-top py-3 shadow-sm" id="mainNav">
        <div class="container-fluid px-4 px-lg-5">
            <a class="navbar-brand d-flex align-items-center" href="#page-top">
                <img class="img-responsive shadow-3 me-2" src="logoblanco.svg" alt="Logo" style="height: 3ex; filter: invert(60%) contrast(150%)" />
                Portfolio Sansito Dev
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#about">{{ $t('about_me') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">{{ $t('contact')}}</a>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <select v-model="selectedLang" @change="changeLanguage" class="form-select ms-2" style="width: auto;">
                            <option value="es">🇪🇸 Español</option>
                            <option value="en">🇬🇧 English</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            selectedLang: this.$i18n.locale || (navigator.language.startsWith('es') ? 'es' : 'en'), // Detecta idioma del navegador
        };
    },
    methods: {
        changeLanguage() {
            this.$i18n.locale = this.selectedLang; // Cambia el idioma dinámicamente
        },
    },
};
</script>
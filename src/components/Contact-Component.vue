<template>
    <section class="page-section bg-white py-5" id="contact">
        <div class="container text-dark">
            <h2 class="text-center animate__animated">
                {{ $t("contactTitle") }}
            </h2>
            <hr class="divider" />
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-3 text-center mb-5 mb-lg-0">
                    <a
                        class="bi bi-telegram fs-2 mb-3 text-muted"
                        href="https://t.me/SansitoDev"
                        target="_blank"
                        title="Enviar Telegram"
                    ></a>
                    <div>+54 9 (3442) 453 430</div>
                </div>
                <div class="col-lg-3 text-center mb-5 mb-lg-0">
                    <a
                        class="bi bi-envelope fs-2 mb-3 text-muted"
                        href="mailto:santiagosito@gmail.com"
                        target="_blank"
                        title="Enviar Email"
                    ></a>
                    <div>santiagosito@gmail.com</div>
                </div>
                <div class="col-lg-3 text-center mb-5 mb-lg-0">
                    <a
                        class="bi bi-linkedin fs-2 mb-3 text-muted"
                        href="https://www.linkedin.com/in/santiagosito/"
                        target="_blank"
                        title="Perfil de LinkedIn"
                    ></a>
                    <div>Santiago Sito</div>
                </div>
                <div class="col-lg-3 text-center mb-5 mb-lg-0">
                    <a
                        class="bi bi-github fs-2 mb-3 text-muted"
                        href="https://github.com/sansito84"
                        target="_blank"
                        title="Perfil de Github"
                    ></a>
                    <div>SanSito84</div>
                </div>
            </div>
            <hr class="divider" />
            <div class="row gx-4 gx-lg-5 justify-content-center text-center">
                <div class="col col-4">
                    <a class="btn btn-dark" :href="cvLink" target="_blank">{{
                        $t("cv_download")
                    }}</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  computed: {
    cvLink() {
      return this.$i18n.locale === 'en' ? 'cv.pdf' : 'cvs.pdf';
    }
  }
};
</script>
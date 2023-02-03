<template>
    <div class="container py-5 bg-white text-dark rounded-5" id="email">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 col-xl-6 text-center">
                <h2 class="mt-0">Enviame un mensaje y lo responderé a la brevedad</h2>
                <h4 class="mt-0">Escribeme y podremos coordinar una reunión.</h4>
            </div>
        </div>
        <div class="row justify-content-center mb-2">
            <div class="col-lg-6">
                <form class="page-section" id="contact contact-form" name="contact" ref="form" @submit.prevent="sendEmail">    
                    <div class="form-floating mb-3">
                        <input class="form-control" name="user_name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label for="name">Nombre</label>
                    </div>
                    <!-- Email address input-->
                    <div class="form-floating mb-3">
                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" name="user_email" />
                        <label for="email">Dirección Email</label>
                    </div>
                    <!-- Message input-->
                    <div class="form-floating mb-3">
                        <textarea class="form-control form-control-lg" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem; min-height: 5rem;" data-sb-validations="required" name="message"></textarea>
                        <label for="message">Mensaje</label>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>                  
                    <!-- Submit Button-->
                    <div class="d-grid"><input class="btn btn-primary btn-xl" id="submitButton" type="submit" value="Enviar"></div>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_d40930b', 'template_lsa01d2', this.$refs.form, 'Dq1CMCCIcOmQWpZf3')
        .then((result) => {
            alert('Message send!', result.text);
        }, (error) => {
            alert('FAILED...', error.text);
        });
    }
  }
}
</script>
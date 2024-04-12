<template>
    <div class="page-section bg-white" id="email">
        <div class="container p-3 bg-secondary rounded-4 mb-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 col-xl-6 text-center text-light">
                <h2 class="mt-0">
                    Send me a message and I will reply shortly / Enviame un
                    mensaje y lo responderé a la brevedad
                </h2>
                <h4 class="mt-0">
                    Write me and we can arrange a meeting / Escribeme y podremos
                    coordinar una reunión.
                </h4>
            </div>
        </div>
        <div class="row justify-content-center mb-2 text-dark">
            <div class="col-lg-6">
                <form
                    class="page-section"
                    id="contact contact-form"
                    name="contact"
                    ref="form"
                    @submit.prevent="sendEmail"
                >
                    <div class="form-floating mb-3">
                        <input
                            class="form-control"
                            name="user_name"
                            type="text"
                            placeholder="Enter your name..."
                            data-sb-validations="required"
                        />
                        <label for="name">Name / Nombre</label>
                    </div>
                    <!-- Email address input-->
                    <div class="form-floating mb-3">
                        <input
                            class="form-control"
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            data-sb-validations="required,email"
                            name="user_email"
                        />
                        <label for="email">Email</label>
                    </div>
                    <!-- Message input-->
                    <div class="form-floating mb-3">
                        <textarea
                            class="form-control form-control-lg"
                            id="message"
                            type="text"
                            placeholder="Enter your message here..."
                            style="height: 10rem; min-height: 5rem"
                            data-sb-validations="required"
                            name="message"
                        ></textarea>
                        <label for="message">Message / Mensaje</label>
                        <div
                            class="invalid-feedback"
                            data-sb-feedback="message:required"
                        >
                            A message is required.
                        </div>
                    </div>
                    <!-- Submit Button-->
                    <div class="d-grid">
                        <input
                            class="btn btn-primary btn-xl"
                            id="submitButton"
                            type="submit"
                            value="Send / Enviar"
                        />
                    </div>
                </form>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
    import emailjs from "@emailjs/browser";
    import { useToast } from "vue-toastification";
    import "vue-toastification/dist/index.css";
    export default {
        methods: {
            sendEmail() {
                emailjs
                    .sendForm(
                        process.env.VUE_APP_EMAILJS_SERVICE_ID,
                        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
                        this.$refs.form,
                        process.env.VUE_APP_EMAILJS_USER_ID
                    )
                    .then(
                        (result) => {
                            const toast = useToast();
                            toast.success("Sended message! / Mensaje enviado! 🚀");
                        },
                        (error) => {
                            const toast = useToast();
                            toast.error("Error 😬");
                        }
                    );
            },
        },
    };
</script>

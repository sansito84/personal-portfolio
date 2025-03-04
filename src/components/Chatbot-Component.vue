<template>
    <div>
        <!-- Botón flotante del chatbot -->
        <b-button
            variant="primary"
            class="chatbot-float-btn"
            @click="toggleChat"
            v-b-tooltip.hover
            title="Haz clic para abrir el chat"
        >
            <Icon
                icon="tabler:message-chatbot-filled"
                width="32"
                height="32"
                style="color: white"
            />
        </b-button>

        <!-- Ventana emergente del chatbot -->
        <div v-if="isChatOpen" class="chatbot-window">
            <div class="chatbot-header">
                <Icon
                    icon="tabler:message-chatbot-filled"
                    width="32"
                    height="32"
                    style="color: white"
                />
                <h3>AmikBot</h3>
                <a @click="toggleChat">
                    <Icon
                        icon="mdi:close-outline"
                        width="24"
                        height="24"
                        style="color: red"
                    />
                </a>
            </div>

            <div class="chatbot-body">
                <!-- Mensajes del chat -->
                <div
                    v-for="(msg, index) in messages"
                    :key="index"
                    :class="['message', msg.sender]"
                >
                    <div
                        class="message-bubble"
                        v-html="formatResponse(msg.text)"
                    ></div>
                </div>
            </div>

            <!-- Input de mensaje del usuario -->
            <b-input-group class="mt-3">
                <b-form-input
                    v-model="userInput"
                    placeholder="Escribe tu mensaje..."
                    @keyup.enter="sendMessage"
                />
                <b-input-group-append>
                    <b-button variant="primary" @click="sendMessage">
                        <Icon
                            icon="mdi:send"
                            style="font-size: 1.2rem; color: white"
                        />
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                isChatOpen: false,
                userInput: "",
                messages: [],
            };
        },
        methods: {
            toggleChat() {
                this.isChatOpen = !this.isChatOpen;
                if (this.isChatOpen) {
                    this.sendWelcomeMessage(); // Envía el mensaje de bienvenida al abrir el chat
                }
            },
            sendWelcomeMessage() {
                const welcomeMessage = {
                    text: "¡Hola! Soy AmikBot el asistente virtual de Santiago. Realizado Python y Gemini de Google. Debido a que no utilizo un servicio de pago para para la API de mensajería, puede que haya demoras en mis respuestas. Te pido que esperes unos minutos hasta que se active y te envíe la respuesta. ¡Estoy aquí para ayudarte!",
                    sender: "bot",
                };
                this.messages.push(welcomeMessage); // Agrega el mensaje de bienvenida a los mensajes
            },
            sendMessage() {
                if (this.userInput.trim() === "") return;

                // Agregar el mensaje del usuario al chat
                const userMessage = {
                    text: this.userInput,
                    sender: "user",
                };
                this.messages.push(userMessage);

                // Limpiar el input
                const userInputCopy = this.userInput;
                this.userInput = "";

                // Enviar el mensaje a la API
                this.fetchResponse(userInputCopy);
            },
            async fetchResponse(userMessage) {
                const timeout = 30000; // 30 segundos
                let retry = true;

                // Crear una promesa que se resolverá después del tiempo de espera
                const timeoutPromise = new Promise((resolve) => {
                    setTimeout(() => {
                        if (retry) {
                            resolve("timeout");
                        }
                    }, timeout);
                });

                // Hacer el llamado a la API
                const apiCall = async () => {
                    try {
                        const response = await axios.post(
                            process.env.VUE_APP_API_CHATBOT,
                            { question: userMessage }
                        );
                        // Agregar la respuesta del bot al chat
                        const botMessage = {
                            text: response.data.response,
                            sender: "bot",
                        };
                        this.messages.push(botMessage);
                        retry = false; // No reintentar si se recibe la respuesta
                    } catch (error) {
                        console.error(
                            "Error al comunicarse con la API:",
                            error
                        );
                    }
                };

                // Ejecutar ambas promesas
                await Promise.race([apiCall(), timeoutPromise]).then(
                    (result) => {
                        if (result === "timeout") {
                            console.log(
                                "La respuesta tardó más de 30 segundos. Se reintentará..."
                            );
                            // Volver a llamar a la API
                            this.fetchResponse(userMessage);
                        }
                    }
                );
            },

            formatResponse(text) {
                // Reemplazar asteriscos por etiquetas HTML para negrita y cursiva
                return text
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Negrita
                    .replace(/\*(.*?)\*/g, "<em>$1</em>"); // Cursiva
            },
        },
    };
</script>

<style scoped>
    /* Estilos para el botón flotante */
    .chatbot-float-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Estilos para la ventana del chatbot */
    .chatbot-window {
        position: fixed;
        bottom: 90px; /* Ajuste para que aparezca sobre el botón flotante */
        right: 20px;
        width: 90%; /* Cambiado a 90% para adaptarse a pantallas pequeñas */
        max-width: 300px; /* Ancho máximo para pantallas grandes */
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 10px;
        z-index: 1001; /* Debe tener un z-index mayor que el botón */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden; /* Evita que el contenido sobresalga */
    }

    /* Estilos para el header del chatbot */
    .chatbot-header {
        background-color: #007bff;
        color: white;
        padding: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Estilos para el cuerpo del chatbot */
    .chatbot-body {
        max-height: 300px;
        overflow-y: auto;
        padding: 10px;
    }

    /* Estilos generales para los mensajes */
    .message {
        margin-bottom: 10px;
        display: flex;
        align-items: flex-end; /* Alinea los mensajes en la parte inferior */
    }

    /* Estilos para el globo de chat del usuario */
    .message.user {
        justify-content: flex-end; /* Alinea a la derecha */
    }

    /* Estilos para el globo de chat del bot */
    .message.bot {
        justify-content: flex-start; /* Alinea a la izquierda */
    }

    /* Estilos para el globo de chat */
    .message-bubble {
        position: relative;
        max-width: 70%;
        padding: 10px 15px;
        color: white;
        background-color: #007bff; /* Color del globo */
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    /* Redondeo solo en un lado del globo del usuario */
    .message.user .message-bubble {
        border-radius: 20px 20px 0 20px; /* Arriba, derecha, abajo, izquierda */
    }

    /* Redondeo solo en un lado del globo del bot */
    .message.bot .message-bubble {
        border-radius: 20px 20px 20px 0; /* Arriba, derecha, abajo, izquierda */
    }

    /* Pico del globo del usuario */
    .message.user .message-bubble::after {
        content: "";
        position: absolute;
        right: -10px;
        top: 10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent #007bff; /* Color del globo */
    }

    /* Pico del globo del bot */
    .message.bot .message-bubble::after {
        content: "";
        position: absolute;
        left: -10px;
        top: 10px;
        border-width: 12px;
        border-style: solid;
        border-color: transparent #007bff transparent transparent; /* Color del globo */
    }
</style>

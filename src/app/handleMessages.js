const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("form-message")

const messages = [
    {
        id: 1,
        text: "Hola! Qué tal?",
        hour: "11:10",
        me: false
    },
    {
        id: 2,
        text: "Bien, vos?",
        hour: "11:11",
        me: true
    },
    {
        id: 3,
        text: "Bien, nos vemos hoy?",
        hour: "11:15",
        me: false
    },
    {
        id: 4,
        text: "Si, te paso a buscar y vamos",
        hour: "11:20",
        me: true
    }
]

const renderMessages = (list) => {
    $listMessages.innerHTML = ""

    list.forEach((message) => {
        $listMessages.innerHTML += `
        <div class="message ${message.me ? 'me' : ''}">
            <p class="content">
                ${message.text}
            </p>
            <p class="time">
                ${message.hour}
            </p>
        </div>
        `
    })
}

const sendMessage = (event) => {
    const now = new Date()
    if (event.key === "Enter"){
        const newMessage = {
            text: $message.value,
            me: true,
            hour: now.getHours() + ":" + now.getMinutes()
        }
        console.log(newMessage)
    } else {
        console.log("Precionaste la tecla", event.key)
    }
}

// 'keydown' es apretar enter.
$message.addEventListener("keydown", (e) => {
    sendMessage(e)
})

$formMessage.addEventListener("submit", sendMessage)
renderMessages(messages)
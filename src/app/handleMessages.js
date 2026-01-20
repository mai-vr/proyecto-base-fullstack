const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMessage = document.getElementById("form-message")

let messages = [
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

const loadChats = () => {
    const data = JSON.parse(localStorage.getItem("messages"))
    if (data === null){
        return messages
    }
    return data 
}

const saveChats = (listOfMessages) => {
    localStorage.setItem("messages", JSON.stringify(listOfMessages))
}

const renderMessages = (listOfMessages) => {
    $listMessages.innerHTML = ""

    listOfMessages.forEach((message) => { // El '+=' concatena con lo último que se agregó.
        // Pregunto si agregar la clase 'me' definida en el CSS con ciertos estilos.
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
        
        // messages.push(newMessage)
        // Persistir info. para guardar los cambios.
        
        const messagesInLS = loadChats()
        // Spread operator.
        messages = [...messagesInLS, newMessage]

        saveChats(messages)
        renderMessages(messages)
        $formMessage.reset()
    } 
}

// 'keydown' es apretar enter.
$message.addEventListener("keydown", (e) => {
    sendMessage(e)
})

const initialMessages = loadChats()
renderMessages(initialMessages)
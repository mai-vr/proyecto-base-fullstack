// Referenciar elementos a manipular del html.
const $search = document.getElementById("search")
const $listChat = document.querySelector(".chats ul") // referencio la lista que está dentro de la clase 'chats'

// Simulación de una base de datos.
const chatsData = [ //lista de objetos.
    {
        name: "Maria Sandoval",
        lastMessage: "Vamos a la plaza",
        avatar: "../../assets/fotodeperfilgato.webp"
    },
    {
        name: "Tomas Alvarez",
        lastMessage: "Que onda?",
        avatar: "../../assets/fotodeperfil.webp"
    },
    {
        name: "Andres Gonzalez",
        lastMessage: "Ayer no",
        avatar: "../../assets/fotodeperfilgato2.webp"
    }
]

const renderChats = (list) => {
    $listChat.innerHTML = "" //ahora voy a añadir contenido nuevo, por lo que limpio todo al principio.

    if (list.length === 0){
        $listChat.innerHTML = `
        <li class = "empty">
        No hay chats para mostrar
        </li>
        `
    }

    list.forEach((chat) => { //para cada uno de mi lista de chats definida más arriba voy a generar un html.
        $listChat.innerHTML += `
        <li class="user-chat">
            <img src=${chat.avatar} alt="">
            <div>
                <h3>${chat.name}</h3>
                <p>${chat.lastMessage}</p> 
            </div>
        </li>
        `
    })
}

// const searchChats = () => {
//     const nameSearch = $search.value.toLowerCase()

//     for (let i = 0; i < $chats.length; i++) { // Cada vez que modifico el input se ejecuta el bucle tantas veces como contactos tenga definidos en el html.
//         const $chat = $chats[i] // voy guardando cada chat en la var por cada letra que se vaya escribiendo.
//         const $titleTag = $chat.querySelector("h3")
//         const name = $titleTag.textContent.toLowerCase() // el contenido textual de una etiqueta.

//         if (name.includes(nameSearch)) { // evalua si lo que ingreso en el input coincide con algun caracter de los usuarios.
//             $chat.style.display = "flex"
//         } else {
//             $chat.style.display = "none"
//         }
//     }

//     // Validación de la longitud de $chats por si no hay ninguno.
//     const lengthChat = $chats.length


// }

const searchChats = () => {
    const nameSearch = $search.value.toLowerCase()
    // callback: se ejcuta en cada vuelta de la info. de mi data.
    // la funcion 'filter' es un bucle (una función de JS que se ejecuta en arrays).
    const filteredChats = chatsData.filter((chat) => chat.name.toLowerCase().includes(nameSearch))
    renderChats(filteredChats)
}

$search.addEventListener("input", searchChats)
renderChats(chatsData)
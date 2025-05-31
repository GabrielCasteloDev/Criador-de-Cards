document.getElementById('submit').addEventListener('click', () => {

    const nomeInput = document.getElementById('name')
    const descricaoInput = document.getElementById('descricao')
    const imagemInput = document.getElementById('img')

    const nome = nomeInput.value
    const descricao = descricaoInput.value
    const imagem = imagemInput.files[0]

    if (!nome || !descricao || !imagem){
        window.alert('[ERROR]Preencha todas as informacoes')
        return
    }


    const reader = new FileReader()

    reader.onload = () => {

        const card = `
        <div class="card">
        <h1 class="card-h1">${nome}</h1>
        <p class="card-p">${descricao}</p>
        <div class="img-card">
        <img src="${reader.result}" class="card-img">
        </div>
        </div>
        `

        document.getElementById("cards").insertAdjacentHTML('beforeend',card)

        nomeInput.value = ''
        descricaoInput.value = ''
        imagemInput.value = ''
    }


    reader.readAsDataURL(imagem)

    
})


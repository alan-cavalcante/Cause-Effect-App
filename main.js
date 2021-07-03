const people = [
    { name: "Alan", street: "Rue des Cascades", city: "Salvador", state: "Bahia", country: "Brasil", telephone: "99999999", birthday: "00/00/00" },
    { name: "Nala", street: "Rue de Roi, nome grande apenas para demonstrar que a linha de texto quebra quando chega no limite da Div que a comporta.", city: "Salvalegria", state: "Bahêa", country: "BR", telephone: "88888888", birthday: "11/11/11" },
    { name: "Lana", street: "Fosse minha", city: "Salvanada", state: "BA", country: "Feijoadalandia", telephone: "77777777", birthday: "22/22/22" },
    { name: "Laan", street: "Rua ladrilhada", city: "Salva", state: "Terra da Felicidade", country: "Samba", telephone: "66666666", birthday: "33/33/33" },
    { name: "Naal", street: "Rua com pedrinhas", city: "Roma Negra", state: "BBMP", country: "Nomansland", telephone: "55555555", birthday: "44/44/44" }
];

mostrarPainel = 0

function panel() {
    if (mostrarPainel == 1) {
        quadro = document.getElementById("containerquadro")
        quadro.style.display = "flex"
    }
}

function showInfo(nm) {
    panel(mostrarPainel = 1)
    let painelNome = document.getElementById("nome")
    let painelEnd = document.getElementById("rua")
    let painelCity = document.getElementById("cidade")
    let painelPais = document.getElementById("pais")
    let painelTel = document.getElementById("tel")
    let painelAniv = document.getElementById("aniv")

    for (nomes of people) {
        if (nomes.name == nm) {
            painelNome.textContent = nomes.name
            painelEnd.textContent = nomes.street
            painelCity.textContent = nomes.city
            painelPais.textContent = nomes.country
            painelTel.textContent = nomes.telephone
            painelAniv.textContent = nomes.birthday
        }
    }
}
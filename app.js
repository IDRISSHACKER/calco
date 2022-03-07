let valeur = document.querySelectorAll('.valeur')
let clean = document.querySelector('.clean')
let egal = document.querySelector('.egal')
let effacer = document.querySelector('.effacer')
let ecran = document.querySelector('.container-screen')
let resultat = document.querySelector('.container-screen span')

ecran.innerHTML = ""

let error = () => {
    ecran.innerText = ""
    ecran.classList.add('error')
}
let del_error = () => { ecran.classList.remove('error') }

const operation = ['+', '-', 'X', '/', '%']

// Saisi de tous les elements sur l'ecran quand ils recevoint un click
valeur.forEach(element => {
    element.addEventListener('click', () => {
        del_error()
        ecran.append(element.innerHTML)
    })
})

egal.addEventListener('click', (e) => {
    if (ecran.innerHTML == "") {
        error()
        //return
    }
    if (ecran.innerHTML !== "") {
        ecran.innerHTML = eval(ecran.innerHTML)
    }
})

effacer.addEventListener('click', (e) => {
    let nbre_valeurs = ecran.innerHTML.length
    let liste_new_valeurs = ecran.innerHTML.split('').slice(0, nbre_valeurs - 1)
    let new_valeurs = liste_new_valeurs.join('')
    ecran.innerHTML = new_valeurs
})

clean.addEventListener('click', (e) => {
    del_error()
    ecran.innerHTML = ""
})
let valeur = document.querySelectorAll('.valeur')
let clean = document.querySelector('.clean')
let egal = document.querySelector('.egal')
let effacer = document.querySelector('.effacer')
let ecran = document.querySelector('.container-screen')
let resultat = document.querySelector('.container-screen span')

ecran.innerHTML = "";

valeur.forEach(element => {
    element.addEventListener('click', ()=>{
        ecran.append(element.innerHTML)
    })
})

egal.addEventListener('click', (e)=>{
    if (ecran.innerHTML == ""){
        alert("Aucune operation n'a ete entre !!!")
        //return
    }
    addition()
})

let addition = () => {
    let new_valeurs = ecran.innerHTML.split('')
    new_valeurs.forEach(element => {
        if (element == "+") {
            console.log(new_valeurs.indexOf(element))
        }
    })
}

effacer.addEventListener('click', (e)=>{
    let nbre_valeurs = ecran.innerHTML.length
    let liste_new_valeurs = ecran.innerHTML.split('').slice(0, nbre_valeurs-1)
    let new_valeurs = liste_new_valeurs.join('')
    ecran.innerHTML = new_valeurs
})

clean.addEventListener('click', (e)=>{
    ecran.innerHTML = "";
})
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
    element.addEventListener('click', ()=>{
        del_error()
        ecran.append(element.innerHTML)
    })
})

egal.addEventListener('click', (e)=>{
    if (ecran.innerHTML == ""){
        error()
        //return
    }
    if (ecran.innerHTML !== ""){
        resultat_nombre(ecran.innerHTML)
        addition()
        soustraction()
        division()
        multiplication()
    }
})

// Fonction verifier si le resultat est un nombre
let resultat_nombre = (nbre) => {
    if (isNaN(parseFloat(nbre))) {
        error()    
    }
}

// let signe_consecutif = () => {
//     operation.forEach(element => {
//         let new_valeurs = ecran.innerHTML.split('')
//         new_valeurs.forEach(k => {
//             if (element == k) {
//                 let positions = []
//                 let position = new_valeurs.indexOf(k)
//                 positions.push(position)
//                 console.log(positions[2])
//             }
//         })
//     })
// }

// Fonction pour gerer l'addition
let addition = () => {
    let new_valeurs = ecran.innerHTML.split('')
    new_valeurs.forEach(element => {
        if (element == "+") {
            let partie1 = parseFloat(((new_valeurs.slice(0, new_valeurs.indexOf(element)))).join(''))
            let partie2 = parseFloat((new_valeurs.slice((new_valeurs.indexOf(element))+1, new_valeurs.length+1)).join(''))
            // console.log(partie1)
            // console.log(partie2)
            let nbre = partie1 + partie2
            resultat_nombre(nbre)          
            if (!isNaN(parseFloat(nbre))) {
                ecran.innerHTML = nbre;   
            }
        }
    })
}

// Fonction pour gerer soustraction
let soustraction = () => {
    let new_valeurs = ecran.innerHTML.split('')
    new_valeurs.forEach(element => {
        if (element == "-") {
            let partie1 = parseFloat(((new_valeurs.slice(0, new_valeurs.indexOf(element)))).join(''))
            let partie2 = parseFloat((new_valeurs.slice((new_valeurs.indexOf(element))+1, new_valeurs.length+1)).join(''))
            // console.log(partie1)
            // console.log(partie2)
            let nbre = partie1 - partie2
            resultat_nombre(nbre)          
            if (!isNaN(parseFloat(nbre))) {
                ecran.innerHTML = nbre;   
            }
        }
    })
}

// Fonction pour gerer division
let division = () => {
    let new_valeurs = ecran.innerHTML.split('')
    new_valeurs.forEach(element => {
        if (element == "/") {
            let partie1 = parseFloat(((new_valeurs.slice(0, new_valeurs.indexOf(element)))).join(''))
            let partie2 = parseFloat((new_valeurs.slice((new_valeurs.indexOf(element))+1, new_valeurs.length+1)).join(''))
            // console.log(partie1)
            // console.log(partie2)
            let nbre = partie1 / partie2
            resultat_nombre(nbre)          
            if (!isNaN(parseFloat(nbre))) {
                ecran.innerHTML = nbre;   
            }
        }
    })
}

// // Fonction pour gerer multiplication
let multiplication = () => {
    let new_valeurs = ecran.innerHTML.split('')
    new_valeurs.forEach(element => {
        if (element == "X") {
            let partie1 = parseFloat(((new_valeurs.slice(0, new_valeurs.indexOf(element)))).join(''))
            let partie2 = parseFloat((new_valeurs.slice((new_valeurs.indexOf(element))+1, new_valeurs.length+1)).join(''))
            // console.log(partie1)
            // console.log(partie2)
            let nbre = partie1 * partie2
            resultat_nombre(nbre)          
            if (!isNaN(parseFloat(nbre))) {
                ecran.innerHTML = nbre;   
            }
        }
    })
}


// Effacer le dernier caractere
effacer.addEventListener('click', (e)=>{
    let nbre_valeurs = ecran.innerHTML.length
    let liste_new_valeurs = ecran.innerHTML.split('').slice(0, nbre_valeurs-1)
    let new_valeurs = liste_new_valeurs.join('')
    ecran.innerHTML = new_valeurs
})

// Effacer toutes les valeurs saisies sur l'ecran
clean.addEventListener('click', (e)=>{
    del_error()
    ecran.innerHTML = ""
})
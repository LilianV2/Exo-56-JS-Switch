//     -----------------  Switch -----------------

let item = prompt('Quel accessoires utilisez-vous ?')

switch (item) {
    case 'souris':
        alert("J'utilise une souris !")
        break;
    case 'clavier':
        alert("J'utilise un clavier !")
        break;
    case 'ordinateur':
        alert("J'utilise un ordinateur !")
        break;
    case 'tapis':
        alert("J'utilise un tapis !")
        break;
    case 'imprimante':
        alert("J'utilise une imprimante !")
        break;
    case 'ondulateur':
        alert("J'utilise un ondulteur !")
        break;
    default:
        alert("Accessoire inconnu")
}
/*
functionLike(this{
    this.class.toggle((this)
}
functionremove(this{this}parentElement.parent.Element.parent.Elementremove())
*/

function like (balise_courante){
    balise_courante.classList.toggle("toto")
}

function remove ( balise_courante){
    balise_courante.parentElement.parentElement.remove()
}

function checknumber(balise_courante){
    const qte = +balise_courante.value
    const pu = +balise_courante.parentElement.parentElement.children[1].innerText.split(" ")[0]
    
    balise_courante.parentElement.parentElement.children[3].innerText = pu*qte + " Fcfa"
    let sommeTotale =0
     document.querySelectorAll(('.total')).forEach(el => sommeTotale += +el.innerText.split(" ")[0] )
     document.querySelector(".cart-total-price").innerText = sommeTotal + " Fcfa"
}
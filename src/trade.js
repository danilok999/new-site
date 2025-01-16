function getCards(){
    let cardsLocalStorage=localStorage.getItem('cart')
    if (cardsLocalStorage !==null ) {
        return JSON.parse(cardsLocalStorage)
}

return []
}

function setCard(id){
    let cards=getCards()
    let control = false
    const index =cards.indexOf(id)

    if(index ===-1){
        cards.push(id)
        control=true
    }
    else{
        cards.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cards))
    return{
        control,
        cards
    }
}
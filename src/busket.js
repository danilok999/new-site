window.addEventListener('DOMContentLoaded',function(){
    let content=document.querySelector('.cart__content')
    let cards=getCards()
    cards.forEach(id => {
    let item=arayCards.find((item)=>item.id===id)
        if(item)
            createCard(item)
    });
    function createCard(item){
        let card=document.createElement('div'),
        left=document.createElement('div'),
        photo=document.createElement('img'),
        card_info=document.createElement('div'),
        header=document.createElement('p'),
        text=document.createElement('p'),
        text_1=document.createElement('p'),
        input=document.createElement('input');
        
    
        card.classList.add('cart__card')
        left.classList.add('cart__left')
        photo.classList.add('cart__left_photo')
        photo.src=item.img
        card_info.classList.add('cart__left_discription')
        header.classList.add('cart__header')
        header.textContent=item.header
        text.classList.add('cart__about')
        text.textContent=item.about
        text_1.classList.add('cart__cost_1')
        text_1.textContent=item.cost
        input.classList.add('cart__input')
        

        input.setAttribute('type','number')
        input.setAttribute('value','1')
        input.setAttribute('min','1')
        input.setAttribute('max','20')
        

        content.appendChild(card)
        card.appendChild(left)
        left.appendChild(photo)
        left.appendChild(card_info)
        card_info.appendChild(header)
        card_info.appendChild(text)
        card_info.appendChild(text_1)
        card.appendChild(input)
        
        
    }
    let delete__button=document.getElementById("delete__button")
    localStorage.setItem('cart',JSON.stringify(cards))
    delete__button.onclick=()=>{
        localStorage.removeItem('cart')
        this.location.reload()
    }
})

function getCost(){
    let cards=getCards()
    let summa=0
    cards.forEach(id => {
        let amount=arayCards.find((item)=>item.id===id)
            if(amount){
                summa+=amount.cost
            }
        });
        let result=document.querySelector(".cart__form_cost")
        result.textContent=`Итого ${summa}руб`
}

    // let content=document.querySelector('.cart__content')

    // let cardButtons=document.createElement('div')
    //     let card__buttons_delete=document.createElement('button')
    //     let card__buttons_delete_2=document.createElement('button')

    // cardButtons.classList.add('cart__buttons')
    //     card__buttons_delete.classList.add('cart__delete')
    //     card__buttons_delete_2.classList.add('cart__delete')
    // content.appendChild(cardButtons)

    //     cardButtons.appendChild(card__buttons_delete)
    //     cardButtons.appendChild(card__buttons_delete_2)

 getCost()   
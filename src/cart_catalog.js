window.addEventListener('DOMContentLoaded',function(){
    let catalog=document.querySelector('.catalog')
arayCards.forEach(item => {
    createCard(item)
});

    function createCard(item){
        let card=document.createElement('div'),
        photo=document.createElement('img'),
        header=document.createElement('h3'),
        about=document.createElement('p'),
        cost=document.createElement('div'),
        cost1=document.createElement('p'),
        cost2=document.createElement('p'),
        button=document.createElement('button');
        
        card.classList.add('prodec__cart');

        photo.classList.add('cart__img');
        photo.src=item.img;

        header.classList.add('cart__header');
        header.textContent=item.header;

        about.classList.add('cart__about');
        about.textContent=item.about;
        
        cost.classList.add('cart__cost');

        cost1.classList.add('cart__cost_1');
        
        cost1.textContent=item.cost

        cost2.classList.add('cart__cost_2');
        cost2.textContent=item.oldCost

        button.classList.add('cart__button');
        button.textContent=item.button
        
        catalog.appendChild(card);

        card.appendChild(photo);

        card.appendChild(header);

        card.appendChild(about);

        card.appendChild(cost);

        cost.appendChild(cost1)

        cost.appendChild(cost2)
        
        card.appendChild(button);
    } 
})

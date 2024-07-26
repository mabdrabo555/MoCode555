
let cards1 = [
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlwsULcPntqrz5r4eeyncXFf19-UVMpJFEg&s' ,
    title:'Bread Basket',
    Desc:'Assortment of fresh baked fruit breads 5.50',
    button:'buy'},
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtgvzlbxeozLxKp8YVMSHYJbkmizRz-ywGw&s' ,
    title:'Belgian Waffle',
    Desc:'Vanilla flavored batter with malted flower 7.50',
    button:'buy'},
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qCgu-NFZA_tSIOYzM6c_6yWsxdjm3GtxMQ&s' ,
    title:'Scrambled eggs',
    Desc:'scrambled eggs, roasted red pepper and gartlie <br>, with green onions  7.50',
    button:'buy'},
    


]
let cards2 = [
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlwsULcPntqrz5r4eeyncXFf19-UVMpJFEg&s' ,
    title:'Bread Basket',
    Desc:'Assortment of fresh baked fruit breads 5.50',
    button:'buy'},
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtgvzlbxeozLxKp8YVMSHYJbkmizRz-ywGw&s' ,
    title:'Belgian Waffle',
    Desc:'Vanilla flavored batter with malted flower 7.50',
    button:'buy'},
    {img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qCgu-NFZA_tSIOYzM6c_6yWsxdjm3GtxMQ&s' ,
    title:'Scrambled eggs',
    Desc:'scrambled eggs, roasted red pepper and gartlie <br>, with green onions  7.50',
    button:'buy'},
    


]


cards1.forEach((el)=>{
    console.log(el);
    let brPhoto = document.createElement('img');
    brPhoto.setAttribute('src' , el.img)
    let card1 = document.getElementById('card1')
    let div1 = document.createElement('div')
    card1.appendChild(div1)
    div1.appendChild(brPhoto)
    let brHead1 = document.createElement('h3')
    brHead1.innerText = el.title;
    div1.appendChild(brHead1)
    let brParag1 = document.createElement('P')
    brParag1.innerHTML = el.Desc;
    div1.appendChild(brParag1)
    let button = document.createElement('button')
    button.innerText = el.button;
    div1.appendChild(button)
    div1.style.border = '1px solid '
    div1.style.padding = '2rem'
    
})

cards2.forEach((el)=>{
    console.log(el);
    let brPhoto = document.createElement('img');
    brPhoto.setAttribute('src' , el.img)
    let card2 = document.getElementById('card2')
    let div1 = document.createElement('div')
    card2.appendChild(div1)
    div1.appendChild(brPhoto)
    let brHead1 = document.createElement('h3')
    brHead1.innerText = el.title;
    div1.appendChild(brHead1)
    let brParag1 = document.createElement('P')
    brParag1.innerHTML = el.Desc;
    div1.appendChild(brParag1)
    let button = document.createElement('button')
    button.innerText = el.button;
    div1.appendChild(button)
    div1.style.border = '1px solid '
    div1.style.padding = '2rem'
    
})




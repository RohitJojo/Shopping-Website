let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "fafop",
    name: "Casual Shirt",
    price: 45,
    desc: "lorem ipsum dolor sit amet",
    img: "img-1.jpg"
    },
    {
    id: "okoko",
    name: "Office Shirt",
    price: 100,
    desc: "lorem ipsum dolor sit amet",
    img: "img-2.jpg"
    },
    {  
    id: "zxzxz",
    name: "T-shirt",
    price: 25,
    desc: "lorem ipsum dolor sit amet",
    img: "img-3.jpg"
    },
    {
    id: "qqqqfzzz",
    name: "Men's Suit",
    price: 300,
    desc: "lorem ipsum dolor sit amet",
    img: "img-4.jpg"
    }
];

console.log(shop);

let basket = [{
    // id:"ajdapsjd",
    // item: 1
}];

let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} =x
        return `
        <div id=product-id-${id} class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price} </h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join(""));
};

generateShop();
/**
 * ! Functions to increase quantity of items
 */
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item +=1;
    }

    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined) return;
    else if(search.item === 0) return;
    else{
        search.item -=1;
    }

    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=> {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x+y, 0);
};


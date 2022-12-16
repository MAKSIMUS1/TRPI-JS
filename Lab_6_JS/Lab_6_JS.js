// Задание 1
const cube = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    background: 'yellow'
}

const circle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'white'
}

const triangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    middleLine: true, 
}

const secondCube = {
    width: '100px',
    height: '100px',
    border: '10px solid black',
    background: 'yellow'
}

const secondCircle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'green'
}

const secondTriangle = {
    width: 0,
    height: 0,
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    threeMiddleLines: true, 
}
function FirstTask(){
function CircleDifference(figureOne, figureTwo){
   const propsOne = Object.getOwnPropertyNames(figureOne);
   const propsTwo = Object.getOwnPropertyNames(figureTwo);

   for(let counter = 0; counter < propsOne.length; counter++){
        if(figureOne[propsOne[counter]] != figureTwo[propsTwo[counter]]){
            console.log("Difference : " + figureOne[propsOne[counter]] + " - " + figureTwo[propsTwo[counter]]);
        }
   }
}
CircleDifference(circle, secondCircle);

function AllAreas(figureOne){
    const propsOne = Object.getOwnPropertyNames(figureOne);
    let result = 'Triangle :\n';
    for(let counter = 0; counter < propsOne.length; counter++){
        result += propsOne[counter] + " - " + figureOne[propsOne[counter]]+"\n";
    }
    console.log(result);
}
 AllAreas(triangle);

function OwnColor(figureOne, figureTwo){
    const propsOne = Object.getOwnPropertyNames(figureOne);
    const propsTwo = Object.getOwnPropertyNames(figureTwo);
    let state = 0;
    for(let counter = 0; counter < propsOne.length; counter++){
        if(figureOne[propsOne[counter]] == 'yellow'){
            for(let x = 0; x < propsOne.length; x++){
                if(propsOne[counter] == propsTwo[x]){
                    console.log('Color of cube is not unique property');
                    state++;
                    break;
                }
            }
        }
    }
    
    if(state == 0){
        console.log('Color property of cube is unique');
    }
}
OwnColor(secondCube,cube);
}
FirstTask();
// Задание 2
let shopList = new Array();

class Product{
    background = "white";
    constructor(id, productName, price, img){
        this.id = id;   
        this.productName = productName;
        this.price = price;
        this.img = img;
        shopList.push(this);
        this.addProduct();
    }
    
      get price() {
        return this._price;
      }
    
      set price(value) {
        if (value < 0) {
          alert("Цена не может быть отрицательной.");
          return;
        }
        this._price = value;
      }

    addProduct(){
        let div = document.createElement('div');
        div.className = "infoblock";
        div.style.width = '250px';
        div.style.height = '350px';
        div.style.textAlign = 'center';
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '200px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.productName;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','В корзину');
        div.append(button.addButton()); 
        
    }

    static deleteProduct(id){
        let massive = document.getElementsByClassName('infoblock');
        for(let x = 0; x < massive.length; x++){
            if((x+1) == id){
                massive[x].remove();
            }
        }
    }
    
}

class Button{
    constructor(width, height, background, text){
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    addButton(){
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
}

function backgroundOdd(){
    let massive = document.getElementsByClassName('infoblock');
    for(let i = 0 ; i < massive.length; i++){
        if((i+1) % 2 ==1 || (i+1) == 1 || (i+1) == 0){
            massive[i].style.background = 'gray';
        }
    }
}
let cartButton = new Button(150, 75, 'blue','Корзина');
document.body.prepend(cartButton.addButton());

let first = new Product(1, 'MacBook Pro 11', 2500, "MacBookPro.jpg");
let second = new Product(2, 'Asus ROG Gaming', 1000, "MacBookPro.jpg");
let third = new Product(3, 'Amazon Kindle', 150,  "MacBookPro.jpg");
let fourth = new Product(4, 'Another Product', 10,  "MacBookPro.jpg");
let fiveth = new Product(5, 'MacBook Pro 55', 99000, "MacBookPro.jpg");

let sixth = new Product(6, 'MacBook Pro 6000', 200, "MacBookPro.jpg");
backgroundOdd();

Product.deleteProduct(5);
Product.deleteProduct(6);
Product.deleteProduct(3);
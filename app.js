// Game arrary.
var products = [
    {
        id:0,
        name:"God of War",
        price:"19.99",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        image:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        image2:" https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png",
        color:"blue",
        platform:"PLAYSTATION"
    },
    {
        id:1,
        name:"Killer Instinct",
        price:"14.99",
        description: "bunch of 80s and 90s knockoffs",  image:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        color:"Green",
        platform:"XBOX"
    },
    {
        id:2,
        name:"Donkey Kong Country: Tropical Freeze",
        price:"49.99",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        color:"red",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"NINTENDO SWITCH"
    }
];

function popupBox(idx) {
    let that = this;
    this.ele = document.createElement("div");
    this.ele.classList.add("popUp");
    this.img = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    this.descriptionEle = document.createElement("p")
    this.platformEle = document.createElement("p");
    this.img.setAttribute("src", products[idx].image);
    this.nameEle.innerHTML = " " + products[idx].name;
    this.priceEle.innerHTML = "$" + products[idx].price;
    this.descriptionEle = " " + products[idx].description;
    this.platformEle = " " + products[idx].platform;
    this.ele.append(this.img);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);
    this.ele.append(this.descriptionEle);
    this.ele.append(this.platformEle);

    // This sets the pop up boxes for the game div
    this.ele.addEventListener("click", function() {
        that.ele.style.display = "none";
    });

    document.body.appendChild(this.ele);
}


function Games() {
    let that = this;
    this.productArray = [];
    this.ele = document.createElement("div");
    this.ele.classList.add("products");

    for (let i = 0; i < products.length; i++) {
        this.productArray.push(new Product(i));
        this.productArray[i].ele.addEventListener("click", function() {
            var pop = new popupBox(i);
        });

        this.ele.appendChild(this.productArray[i].ele);
    }

    document.body.appendChild(this.ele);
}

function Product(idx) {
    let that = this;
    this.ele = document.createElement("div");
    this.prodImg = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    // sets image
    this.prodImg.setAttribute("src", products[idx].image);
    this.ele.classList.add("product");
    this.ele.append(this.prodImg);
    //setting the name and price divs
    this.priceEle.innerHTML = " $" + products[idx].price;
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);

    // When you mouse over the div this will change the border color.
    this.ele.addEventListener("mouseover", function() {
        that.ele.style.borderColor = products[idx].color;
    });


}

var threeGames = new Games;

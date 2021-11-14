let food1 = document.getElementById("food1");
let food2 = document.getElementById("food2");
let food3 = document.getElementById("food3");
let food4 = document.getElementById("food4");
let food5 = document.getElementById("food5");
let food6 = document.getElementById("food6");
let food7 = document.getElementById("food7");
let food8 = document.getElementById("food8");
let food9 = document.getElementById("food9");
let food10 = document.getElementById("food10");
let food11 = document.getElementById("food11");
let food12 = document.getElementById("food12");
const foods = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12];

console.log(foods);

function random() {
    // for (let i = 0; i < 10; i++) {
    //     console.log(Math.floor(Math.random() * 12) + 1);
    // }
    let holder = foods[Math.floor(Math.random() * 12)];
    console.log(holder);
    return holder;
}

function btn_display() {
    let display = document.getElementById('display');
    let food = random(); // Random function
    // let food = foods[2];
    display.innerHTML = food.innerHTML;
    // document.getElementById('display-container').style.display = "none";
    document.getElementById('h1').style.display = "none";
    document.getElementById('display-container').style.display = "block";
}
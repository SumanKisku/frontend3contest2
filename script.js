const container = document.querySelector(".container");

getMenu();

// function 1  - render menu

function getMenu() {
    fetch("https://free-food-menus-api-production.up.railway.app/burgers")
        .then((response) => response.json())
        .then((data) => {
            container.innerHTML = data.map((item) => `
        <li>
        <img src=${item.img} alt=${item.name}/>
        <div class="details">
        <h2>${item.name}</h2>
        <p><b>Price</b> - ${item.price}</p>
        <p><b>Rating</b> - ${item.rate}</p>
        </div>
        </li>`
            ).join("");
        })
}

// function 2 - take order

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(" https://free-food-menus-api-production.up.railway.app/burgers")
                .then(response => response.json())
                .then(data => {
                    let burgers = data;
                    let order = []; // making a empty order array
                    for (let i = 0; i < 3; i++) {
                        let randomBurger = burgers[Math.floor(Math.random() * burgers.length)]; // selecting random burgers from burgers
                        order.push(randomBurger); // pushing random burgers to the order array
                    }
                    order = {
                        "randomOrder": order,
                    }
                    resolve(order);
                })
        }, 2500)

    })
}

// function 3 - Order Preparation

function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {order_status: true, paid: false};
            resolve(order);
        }, 1500)

    })
}

// function 4 - pay order

function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {order_status:true, paid:true};
            resolve(order);
        }, 1000)
    })
}

// function 5 - thankyouFnc

function thankyouFnc() {
    payOrder().then(() => {
        alert("Thank You for ordering!");
    })
}
// SECTION GLOBAL VARIABLES
const items = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
    image: 'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1912&q=80',
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    image: 'https://www.thespruceeats.com/thmb/kpuMkqk0BhGMTuSENf_IebbHu1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-ice-cream-10-0b3e120e7d6f4df1be3c57c17699eb2c.jpg',
},
{
    name: 'Sprinkles',
    price: .25,
    quantity: 0,
    image: '',
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0,
    image: '',
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0,
    image: '',
}]

let cartItems = []

// !SECTION


// SECTION BUTTON/BUY MECHANICS

function addItem(name) {
    let item = items.find((item) => item.name == name)
    item.quantity++
    draw()
}

// !SECTION


// SECTION UTIL FUNCTIONS

function makeDivs() {
    items.forEach((flavor) => {
        let element = document.createElement('div')
        element.innerHTML = `
        <div class="card p-1">
            <img src="${flavor.image}" alt="${flavor.name} image">
            <p>${flavor.name} $${flavor.price}</p>
            <button class="btn btn-success" onclick="addItem('${flavor.name}')"><i class="mdi mdi-cart-arrow-down"></i></button>
        </div>
        `
        element.classList = 'col-12 col-md-6 my-1'
        document.getElementById('ice-cream-dump').appendChild(element)
    })
}

function constructCartDiv(item) {
    let element = document.createElement('div')
    element.innerHTML = `
    <div class="row">
    <div class="col-5 d-flex align-items-center">
                        <p>${item.name}</p>
                    </div>
                    <div class="col-7 d-flex justify-content-between align-items-center">
                        <p>${item.quantity}</p>
                        <p>${item.price}</p>
                        <p>${item.price * item.quantity}</p>
                    </div>
                    </div>
    `
    element.classList = 'col-12'
    return element
}

function draw() {
    let itemDump = document.getElementById('item-dump')
    itemDump.innerHTML = ''
    items.forEach((item) => {
        if (item.quantity > 0) itemDump.appendChild(constructCartDiv(item))
    })
}

// !SECTION

makeDivs()
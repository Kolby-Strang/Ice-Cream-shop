// SECTION GLOBAL VARIABLES
const items = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
    image: 'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',
    type: 'ice cream'
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1912&q=80',
    type: 'ice cream'
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    image: 'https://www.thespruceeats.com/thmb/kpuMkqk0BhGMTuSENf_IebbHu1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-ice-cream-10-0b3e120e7d6f4df1be3c57c17699eb2c.jpg',
    type: 'ice cream'
},
{
    name: 'Sprinkles',
    price: .25,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1516746924755-babd21844370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    type: 'topping'
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1585502866757-30ae9e509e31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3185&q=80',
    type: 'topping'
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0,
    image: 'https://www.bakingkneads.com/wp-content/uploads/2020/09/Broken-Cookies.jpg.webp',
    type: 'topping'
}]

let cartItems = []

// !SECTION


// SECTION BUTTON/BUY MECHANICS

function addItem(name) {
    let item = items.find((item) => item.name == name)
    item.quantity++
    draw()
}

function removeItem(name, e) {
    e.preventDefault()
    let item = items.find((item) => item.name == name)
    if (item.quantity == 0) return
    item.quantity--
    draw()
}

function checkout() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "This will submit your cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            items.forEach((item) => item.quantity = 0)
            draw()
            swalWithBootstrapButtons.fire(
                'Order submit',
                'Success!'
            )

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Checkout Cancelled',
            )
        }
    })
}

// !SECTION


// SECTION UTIL FUNCTIONS

function makeDivs() {
    items.forEach((item) => {
        let element = document.createElement('div')
        element.innerHTML = `
        <div class="card p-1" onclick="addItem('${item.name}')" oncontextMenu="removeItem('${item.name}', event)">
            <img src="${item.image}" alt="${item.name} image">
            <p>${item.name} $${item.price}</p>
        </div>
        `
        element.classList = 'col-12 col-md-6 my-1'
        document.getElementById(item.type).appendChild(element)
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
                        <p>$${item.price * item.quantity}</p>
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
    let grandTotal = 0
    items.forEach((item) => grandTotal += item.price * item.quantity)
    document.getElementById('price').innerText = grandTotal
}

// !SECTION

makeDivs()
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
    name: 'Chocolate',
    price: 1.25,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1597648152428-f883fbc9c873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    type: 'ice cream'
},
{
    name: 'Coffee',
    price: 1.25,
    quantity: 0,
    image: 'https://www.simplyrecipes.com/thmb/Y-D7jtMXRW_q3IZmZ-aGuguw_QE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__04__coffee-ice-cream-vertical-00dc174a766a4ff79f443e516e11fcb7.jpg',
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
    name: 'Gummy Bears',
    price: .50,
    quantity: 0,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg',
    type: 'topping'
},
{
    name: 'Resses crumbs',
    price: .50,
    quantity: 0,
    image: 'https://m.media-amazon.com/images/I/81aP46S5r3L.jpg',
    type: 'topping'
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0,
    image: 'https://www.bakingkneads.com/wp-content/uploads/2020/09/Broken-Cookies.jpg.webp',
    type: 'topping'
},
{
    name: 'Waffle Cone',
    price: 1.5,
    quantity: 0,
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80',
    type: 'vessel'
},
{
    name: 'Sugar Cone',
    price: 1,
    quantity: 0,
    image: 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.rimonthly.com/content/uploads/2017/05/13144741/9919e9704f6d93463bafeace80c2c41b-2385909minicone.jpg',
    type: 'vessel'
},
{
    name: 'Dipped Cone',
    price: 2.5,
    quantity: 0,
    image: 'https://www.simplyscratch.com/wp-content/uploads/2012/07/fun-cones.jpg',
    type: 'vessel'
},
{
    name: 'Tub',
    price: 12,
    quantity: 0,
    image: 'https://media.istockphoto.com/id/512476873/vector/icecream-inside-the-disposable-cup.jpg?s=612x612&w=0&k=20&c=99tooCxhG5QGqZLdbYpatpwlQ5pera5iOkm6ybbNQjE=',
    type: 'vessel'
},
{
    name: 'Cup',
    price: 3,
    quantity: 0,
    image: 'https://images.squarespace-cdn.com/content/v1/543fec0fe4b04bbe6d9f983a/1584724710900-6F53266BW7E7QJB17WUJ/cup_large_2500px.jpg?format=2500w',
    type: 'vessel'
}
]

let cones = []

let activeCone = -1

// !SECTION


// SECTION BUTTON/BUY MECHANICS

function addItem(name) {
    let item = items.find((item) => item.name == name)

    if (item.type == 'vessel') {
        newCone(item)
    } else if (activeCone != -1) {
        if (item.type == 'ice cream' && cones[activeCone].scoops.length < 2) {
            cones[activeCone].scoops.push(item.name)

        } else if (item.type == 'ice cream') {
            alertAutoClose('Only 2 scoops per vessel!')
            return
        }
        if (item.type == 'topping' && cones[activeCone].scoops.length > 0) {
            if (!cones[activeCone].toppings.find((topping) => topping.name == item.name)) {
                cones[activeCone].toppings.push({
                    name: item.name,
                    amount: 1
                })
            } else {
                cones[activeCone].toppings.find((topping) => topping.name == item.name).amount++
            }
        } else if (item.type == 'topping') {
            alertAutoClose('Add a scoop first!')
            return
        }
    } else {
        alertAutoClose('Select a vessel first!')
        return
    }

    item.quantity++
    draw()
}

function removeItem(name, e) {
    e.preventDefault()
    if (activeCone == -1) return

    let item = items.find((item) => item.name == name)

    if (item.type == 'vessel') {
        alertAutoClose('Please delete the cone from the total page')
    } else if (item.type == 'topping') {
        let coneItem = cones[activeCone].toppings

        if (coneItem.find((flavor) => flavor.name == item.name).amount == 1) {
            coneItem.splice(cones[activeCone][(item.type == 'ice-cream' ? 'scoops' : 'toppings')].findIndex((flavor) => flavor.name == item.name), 1)
        } else {
            coneItem.find((flavor) => flavor.name == item.name).amount--
        }
    } else {
        cones[activeCone].scoops.splice(cones[activeCone].scoops.findIndex((flavor) => flavor == item.name), 1)
    }
    if (item.quantity == 0) return
    item.quantity--

    draw()
}

function newCone(item) {
    cones.push(
        {
            vessel: item.name,
            scoops: [],
            toppings: []
        }
    )
    selectCone(cones.length - 1)
}

function checkout() {

    if (cones.length == 0) {
        Swal.fire(
            'Error',
            'Your cart is empty.',
            'question'
        )
        return
    }
    if (cones.find((cone) => cone.scoops.length == 0)) {
        console.log('hi');
        Swal.fire(
            'Error',
            'You have empty vessels in your cart.',
            'question'
        )
        return
    }

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
            cones = []
            selectCone(-1)
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

function selectCone(id) {
    activeCone = id
    draw()
}

function removeCone(id) {
    document.getElementById(id).remove()
    let cone = cones[id]
    cones.splice(id, 1)

    items.find((item) => item.name == cone.vessel).quantity--
    if (cone.scoops.length > 0) {
        cone.scoops.forEach((scoop) => {
            items.find((item) => scoop == item.name).quantity--
        })
    }
    if (cone.toppings.length > 0) {
        cone.toppings.forEach((topping) => {
            items.find((item) => topping.name == item.name).quantity -= topping.amount
        })
    }
    draw()
    selectCone(-1)
}

function alertAutoClose(message) {
    let timerInterval
    Swal.fire({
        title: message,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    })
}

// !SECTION


// SECTION UTIL FUNCTIONS

function makeDivs() {
    items.forEach((item) => {
        let element = document.createElement('div')
        element.innerHTML = `
        <div class="card p-2" onclick="addItem('${item.name}')" oncontextMenu="removeItem('${item.name}', event)">
            <img src="${item.image}" alt="${item.name} image">
            <p>${item.name} $${item.price}</p>
        </div>
        `
        element.classList = 'col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-1'
        document.getElementById(item.type).appendChild(element)
    })
}

function constructCartDiv(item) {
    let element = document.createElement('div')
    element.innerHTML = `
    <div class="row py-1">
    <div class="col-5 d-flex align-items-center">
                        <p>${item.name}</p>
                    </div>
                    <div class="col-7 d-flex justify-content-between align-items-center">
                        <p>${item.quantity}</p>
                        <p>$${item.price}</p>
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
    for (let i = 0; i < cones.length; i++) {
        let cone = cones[i]

        let scoopHTML = ''
        cone.scoops.forEach((scoop) => scoopHTML += scoop + "<br>")

        let toppingHTML = ''
        cone.toppings.forEach((topping) => {
            toppingHTML += `
                <div class="col-6">
                    <p>${topping.name}</p>
                </div>
                <div class="col-6 text-end">
                    <p>${topping.amount}</p>
                </div>
            `
        })
        itemDump.innerHTML += `
        <div class="col-12 py-2 ice-cream-object ${(activeCone != -1 ? (i == activeCone ? 'active-cone' : '') : '')}" id="${i}">
            <div class="row">
                <p class="fs-5 fw-bold">Toppings:</p>
                ${toppingHTML}
            </div>
            <div class="row">
                <p class="fs-5 fw-bold">Scoops:</p>
                <p>${scoopHTML}</p>
            </div>
            <div class="row">
                <p class="fs-5 fw-bold">Cone:</p>
                <p>${cone.vessel}</p>
            </div>
            <div class="row justify-content-around mt-2">
                <button class="btn btn-primary col-5" onclick="selectCone('${i}')">Select</button>
                <button class="btn btn-danger col-5" onclick="removeCone('${i}')">Remove</button>
            </div>
        </div>
        `
    }

    let grandTotal = 0
    items.forEach((item) => grandTotal += item.price * item.quantity)
    document.getElementById('price').innerText = grandTotal
}

// !SECTION

makeDivs()
let greetingElm = document.getElementById('greeting');
    greetingElm.innerText = 'Hello World!'


    let apple = 2.99;
    let carrots = 1.59;
    let milk = 2.30;


    let checkout = (apple * 2) + (carrots * 5) + (milk * 1);

    let total = checkout + (checkout * .07);

    let checkoutElm = document.getElementById("checkout");
    let totalElm = document.getElementById("total");

    checkoutElm.innerText = 'Subtotal: $' + checkout;
    totalElm.innerText = 'Total: $' + total;

    console.log('Subtotal: ' + checkout);
    console.log('Total: ' + total);

    // in class exercise

    let classRoom = {
        monitorCount: 23,
        isClassInSession: true,
        roomId: 'N314',
        students: [],
        location: {
            buildingAddress: '314 Ashton Blvd',
            floor: 3,
            side: 'South'
        }
    }
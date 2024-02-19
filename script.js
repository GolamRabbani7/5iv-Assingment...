

const allBtn = document.querySelectorAll('kbd');

let setCount = 0;
let leftSeat = 8;
let countBtn = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (elements) {
        btn.classList.add('bg-green-500')


        const seatName = btn.innerText;
        const perSeat = document.getElementById('per-seat').innerText;
        const classes = 'Economy';

        // get seat container.    
        const seatContainer = document.getElementById('seat-container');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const div = document.createElement('div');

        p1.innerText = seatName;
        p2.innerText = perSeat;
        p3.innerText = classes;

        div.appendChild(p1)
        div.appendChild(p3)
        div.appendChild(p2)

        seatContainer.appendChild(div);
        totalPrice('per-seat');



        // seat add.
        setCount = setCount + 1
        document.getElementById('add-seat').innerText = setCount;

        // left seat.

        leftSeat = leftSeat - 1
        document.getElementById('left-seat').innerText = leftSeat;




    })
}

function totalPrice(id,) {
    const seatPrice = parseInt(document.getElementById(id).innerText)
    const totalPrice = parseFloat(document.getElementById('total-price').innerText)
    const total = seatPrice + totalPrice

    document.getElementById('total-price').innerText = total

    grandTotal(total)
}
function grandTotal(e) {

    document.getElementById('grand').innerHTML = e;

    const applybtn = document.getElementById('apply')
    applybtn.addEventListener('click', function () {
        const grandPrice = parseInt(document.getElementById('grand').innerText);
        const copupone = document.getElementById('input-filed').value;
        if (copupone === 'NEW15') {
            const new15 = grandPrice * 15 / 100;
            const off15 = e - new15;
            document.getElementById('grand').innerHTML = off15;

            // Coupon-part
            const CouponPart = document.getElementById('Coupon-part')
            CouponPart.classList.add('hidden');
        }
        else if (copupone === 'Couple 20') {

            const couple20 = grandPrice * 20 / 100;
            const off20 = e - couple20;
            document.getElementById('grand').innerHTML = off20;

            // Coupon-part
            const CouponPart = document.getElementById('Coupon-part')
            CouponPart.classList.add('hidden');
        }

    })

}










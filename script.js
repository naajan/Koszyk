document.addEventListener('DOMContentLoaded', function() {
    calculatePrices();

    Array.from(document.getElementsByClassName("cart-item")).forEach(item => {
        item.getElementsByClassName("remove")[0].addEventListener('click', () => {
            item.remove();
            calculatePrices();
        })

        item.getElementsByClassName("amount")[0].addEventListener('change', () => {
            calculatePrices();
        })
    })

    function calculatePrices() {
        let subtotal = 0;

        Array.from(document.getElementsByClassName("cart-item")).forEach(item => {
            let price = parseFloat(item.getElementsByClassName("price")[0].innerHTML.replace("zł", ""));
            let amount = parseFloat(item.getElementsByClassName("amount")[0].value);

            subtotal += price*amount;
        })

        subtotal = (Math.floor(subtotal*100)/100).toFixed(2);
        document.getElementsByClassName("total")[0].innerHTML = `Łączna kwota: ${subtotal}zł`;
    }

});



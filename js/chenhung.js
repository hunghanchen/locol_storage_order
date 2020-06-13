$(document).ready(function () {

    $(".header").html("<h1>Products for Sale based on chenhung</h1>");
    $(".footer").html(`
    <div class="gridContainer">
    <section>
        <p>Hung-Han, Chen</p>
        <p>991531399</p>
        <p>Trafagar</p>
    </section>
    <section>
    <div class="images"></div>
    </section>
</div>
    `);
});


var products = [
    { "name": "c- car", "price": 99.49 },
    { "name": "h- ham", "price": 99.49 },
    { "name": "e- ear pod", "price": 99.49 },
    { "name": "n- naan", "price": 99.49 },
    { "name": "h- hummus", "price": 99.49 },
    { "name": "u- unagi", "price": 99.49 },
    { "name": "n- nachos", "price": 99.49 },
    { "name": "g- gin", "price": 99.49 }
];

function createList() {
    document.getElementById("productsList").innerHTML +=
        "<option>Select a Product</option>";
    for (let product of products) {
        document.getElementById("productsList").innerHTML +=
            `<option>${product.name}</option>`;
    }
};

function showPrice() {
    var index = document.getElementById("productsList").selectedIndex - 1;
    if (index != -1) {
        document.getElementById("priceImg").innerHTML =
            "<img src='image/price.png' alt='price'>"
    } else if (index == -1) {
        document.getElementById("priceImg").innerHTML =
            "<p>Please select <br> product!</p>"
    };
};

function saveProductToLS() {
    index = document.getElementById("productsList").selectedIndex - 1;
    console.log(index);
    amount = document.getElementById("inAmount").value;
    customerName = document.getElementById("inName").value;
    customerEmail = document.getElementById("inEmail").value;

    localStorage.setItem("customerName", customerName);
    localStorage.setItem("customerEmail", customerEmail);
    localStorage.setItem("productName", products[index].name);
    localStorage.setItem("price", products[index].price);
    localStorage.setItem("amount", amount);


}
function loadList() {

    let price = parseFloat(localStorage.getItem("price"));
    let amount = parseFloat(localStorage.getItem("amount"));
    let totalPrice = (price * amount).toFixed(2);

    document.getElementById("outName").value = localStorage.getItem("customerName");
    document.getElementById("outEmail").value = localStorage.getItem("customerEmail");
    document.getElementById("outProduct").value = localStorage.getItem("productName");
    document.getElementById("outPrice").value = localStorage.getItem("price");
    document.getElementById("outAmount").value = localStorage.getItem("amount");
    document.getElementById("outTotal").value = totalPrice;

}

function goToQuote() {

    var index = document.getElementById("productsList").selectedIndex - 1;
    var email = document.getElementById("inEmail").value;

    if (index == -1) {
        document.getElementById("priceImg").innerHTML =
            "<p>Please select <br> product!</p>"
    } else if (!emailIsValid(email)) {
        document.getElementById("priceImg").innerHTML =
            "<p>Pleas enter <br> MAIL correct!</p>"
    } else {
        saveProductToLS();
        if (parseFloat(localStorage.getItem("amount")) <= 0) {
            document.getElementById("priceImg").innerHTML =
                "<p>Amount must<br> positive</p>"
        } else {
            location.assign("pages/quote.html");
        }
    }


}
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function goToIndex() {
    location.assign("../index.html");
}
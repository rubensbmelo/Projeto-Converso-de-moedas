const convertbutton = document.querySelector(".convert-button");
const currencyselect = document.querySelector(".currency-select");

function convertvalues() {
    const inputvalue = document.querySelector(".currency-input").value
    const currencyvalueconvert = document.querySelector(".currency-value-to-converet")
    const currencyvalueconverted = document.querySelector(".currency-value")

    console.log(currencyselect.value)

    const dolartoday = 5.22
    const eurotoday = 6.22
    const libratoday = 7.13
    const bitcointoday = 367032.00


    if (currencyselect.value === "dollar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalue / dolartoday)

    } else if (currencyselect.value === "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalue / eurotoday)

    } else if (currencyselect.value === "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalue / libratoday)

    } else if (currencyselect.value === "bitcoin") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8 
        }).format(inputvalue / bitcointoday)
    }

    currencyvalueconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputvalue)

    console.log(convertedvalue)
}
function changecurrency() {
    const currencyname = document.getElementById("currency-name")

    if (currencyselect.value === "dollar") {
        currencyname.innerHTML = "Dólar Americano"
        document.querySelector(".currency-img").src = "./assents/dollar.png"
    } else if (currencyselect.value === "euro") {
        currencyname.innerHTML = "Euro"
        document.querySelector(".currency-img").src = "./assents/euro.png"
    } else if (currencyselect.value === "libra") {
        currencyname.innerHTML = "Libra Esterlina"
        document.querySelector(".currency-img").src = "./assents/libra.png"
    } else if (currencyselect.value === "bitcoin") {
        currencyname.innerHTML = "Bitcoin"
        document.querySelector(".currency-img").src = "./assents/bitcoin.png"

    }
}


currencyselect.addEventListener("change", changecurrency)

convertbutton.addEventListener("click", convertvalues)
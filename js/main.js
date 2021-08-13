// Sheer to mon
const sheerValue = document.getElementById('sheer-value');
const monValue = document.getElementById('mon-value');
const convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', function (e) {


    const valueInSheer = parseFloat(sheerValue.value);
    const valueInMon = valueInSheer / 40;

    if (valueInSheer <= 0) {
        monValue.value = 0;
    } else if (valueInSheer == null || valueInSheer == "") {
        monValue.value = 0;
    }
    else {
        monValue.value = valueInMon;
    }

})

// Celcius to Fahrenhiet
const celciusValue = document.getElementById('celcius-value');
const fahrenhietValue = document.getElementById('fahrenheit-value');
const convertButtonCF = document.getElementById('convert-button-cf');

convertButtonCF.addEventListener('click', function (e) {


    const valueInCelcius = parseFloat(celciusValue.value);
    const valueInFahrenheit = (valueInCelcius * 9 / 5) + 32;

    fahrenhietValue.value = valueInFahrenheit;



})
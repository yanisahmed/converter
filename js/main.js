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
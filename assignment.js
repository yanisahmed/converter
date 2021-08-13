// Problem 1
function seerToMon(seer) {
    if (seer < 0) {
        return 'Please provide a positive value';
    } else {
        let mon = seer / 40;
        return mon;
    }
}


// Problem 2
function totalSales(shirtQty, pantQty, shoeQty) {

    if (shirtQty <= 0 || pantQty <= 0 || shirtQty <= 0) {
        return 'Please provide a valid input parameter'
    } else {
        shirtQty *= 100;
        pantQty *= 200;
        shoeQty *= 500;

        let totalPrice = shirtQty + pantQty + shoeQty;
        return totalPrice;
    }
}


// Problem 3

function deliveryCost(products) {
    const chargeBelow100 = 100;
    const chargeBelow200 = 80;
    const chargeAbove200 = 50;

    if (products > 200) {
        let prodouctAbove200 = products % 200;
        let costBelow100 = 100 * chargeBelow100;
        let costBlelow200 = 100 * chargeBelow200;
        let costAbove200 = prodouctAbove200 * chargeAbove200;

        let totalCost = costBelow100 + costBlelow200 + costAbove200;

        return totalCost;


    } else if (products > 100 && products <= 200) {
        let ProductAbove100 = products % 100;
        let costAbove100 = ProductAbove100 * chargeBelow200;

        let costBelow100 = 100 * chargeBelow100;

        let totalCharge = costAbove100 + costBelow100;
        return totalCharge;

    } else if (products <= 100 && products > 0) {
        return products * chargeBelow100;
    } else {
        return 'Please provide a valid number';
    }
}


// Problem 4

function perfectFriend(names) {
    for (const name of names) {

        if (name.length == 5) {
            return name;
        }
    }
    return 'No Match Found';
}

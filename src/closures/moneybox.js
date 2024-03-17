// Here we are not saving the context
// function moneyBox(coins) {
//     let savedCoins = 0;
//     savedCoins += coins;
//     console.log(`Money Box: $${savedCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let savedCoins = 0;

    function countCoins(coins) {
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const moneyBoxAna = moneyBox();

moneyBoxAna(2);
moneyBoxAna(3);
moneyBoxAna(4);
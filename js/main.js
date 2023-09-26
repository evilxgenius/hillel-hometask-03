let action;
let result;

const bye = () => alert('Bye!');

const numberInput = (pos) => {
    let number;

    while (typeof number !== 'number') {
        let answer = prompt(`enter number #${pos}:`);

        // if the user clicks Cancel, the script will say 'Bye'
        if (answer === null)
            return null;
        // If the user inputs '' or NaN, the script ask the user to input a number again
        else if (answer.trim().length === 0 || Number.isNaN(+answer))
            alert(`Number #${pos}: You passed <${answer}>. Please pass a Number!`);
        else
            number = +answer;
    }

    return number;
}

while (!action) {
    const answer = prompt('What do you want to do? (Possible actions: add, sub, mult, div):');

    if (answer === null) {
        bye();
        break;
    } else if (answer === 'add') {
        action = '+';
    } else if (answer === 'sub') {
        action = '-';
    } else if (answer === 'mult') {
        action = '*';
    } else if (answer === 'div') {
        action = '/';
    } else {
        alert(`You passed <${answer}>, It's wrong! Possible actions: add, sub, mult, div. Try again, please.`);
        continue;
    }

    let firstNum = numberInput(1);
    if (typeof firstNum !== 'number') {
        bye();
        break;
    }

    let secondNum = numberInput(2);
    if (typeof secondNum !== 'number') {
        bye();
        break;
    }

    if (action === '+') {
        result = firstNum + secondNum;
    } else if (action === '-') {
        result = firstNum - secondNum;
    } else if (action === '*') {
        result = firstNum * secondNum;
    } else if (action === '/') {
        result = firstNum / secondNum;
    }

    alert(`Result: ${firstNum} ${action} ${secondNum} = ${result}`);
    bye();
}

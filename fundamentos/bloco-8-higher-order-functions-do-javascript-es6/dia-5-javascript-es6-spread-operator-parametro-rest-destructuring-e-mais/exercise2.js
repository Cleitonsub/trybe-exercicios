const numbers = [2, 5, 8, 9];

const sum = (...numbers) => {
    const sumNumbers= [];
    const repeat = numbers.forEach((number) => {
        return sumNumbers.push(number + number);
    });
    return sumNumbers;
}
console.log(sum(numbers));
//STEP 1

function halfNumber(num) {
    let result = num / 2
    console.log(`Half of ${num} is ${result}.`)
    return result
}
halfNumber(4)

//STEP 2

function squareNumber(num) {
    let result = num * num
    console.log(`The result of squaring the number ${num} is ${result}.`)
    return result
}
squareNumber(8)

//STEP 3

function percentOf(num1, num2) {
    let result = (num1 / num2) * 100
    console.log(`${num1} is ${result}% of ${num2}`)
    return result
}
percentOf(5, 10)

//STEP 4

function findModulus(num1, num2) {
    let result = num2 % num1
    console.log(`${result} is the modulus of ${num1} and ${num2}.`)
    return result
}
findModulus(55, 10)
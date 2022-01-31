// ! callback是把function當作參數傳遞給另一個function
//! callback hell
// function todo(callback) {
//     console.log("studying")
//     callback
// }

// function eat(callback) {
//     console.log("eat dinner")
//     callback
// }

// function study() {
//     console.log("wash hands")
// }

//  todo(eat(study()))
/*
studying
eat dinner
wash hands
*/

//! get data
// function buttonEvent(callback) {
//     let result = 2
//     callback(result)
// }


// const getData = (data) => {
//     let value = data
//     console.log("value is: " + value );
// }

// buttonEvent(getData)

// !get data two parameter

// function data(num, arr, callback) {
//     let result = [...arr]
//     arr.push(num)
//     callback(result, arr)
// } 

// function getData(data, oldData) {
//     console.log(`data: ${data}, the oldData ${oldData}`);
// }
// let number = 100
// let array = [1,2,3]
// data(number, array, getData)
// //data: 1,2,3, the oldData 1,2,3,100

//! callback只取得一個參數即可
function data(num, arr, callback) {
    let result = [...arr]
    arr.push(num)
    callback(result, arr)
} 

function getData(data) {
    console.log(`data: ${data}`);
}
let number = 100
let array = [1,2,3]
data(number, array, getData)
// data: 1,2,3
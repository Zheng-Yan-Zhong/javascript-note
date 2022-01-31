function getStatus() {
    return new Promise(function(resolve, reject) {
    let num = true
    if(num) {
        resolve("Success status: 200")
    } 
    reject("Error status: 500")
})
}

const result = getStatus()
console.log(result);// Promise { 'Success status: 200' }
result.then(function(response){
    console.log(response); //Success status: 200
})
result.catch((error) => console.log(error))
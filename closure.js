//* 使用指向之方式達成存取
//* 避免被垃圾回收機制回收

//! scope chain
let name = "Ian" //Ian
a()
function a() {
    let name = "Dennis"
    b()
}
function b() {
    console.log(name);
}


//! closure

function a() {
    let count = 0
    return function b() {
        count++;
        console.log(count);
        return count
    }
}

const result = a()
result()
result()
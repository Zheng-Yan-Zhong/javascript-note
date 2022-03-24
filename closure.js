function counter() {
  var count = 0;
  //建立私有變數
  return function (x) {
    //利用return 把function傳出去
    count += x;
    return count;
    //最後再把值回傳
  };
}

const countFn = counter();
const result = countFn(5);
console.log(result);

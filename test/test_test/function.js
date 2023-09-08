//고차함수 : 함수를 매개로 받거나 함수를 반환하는 함수
function f1(arr, f){
    let tmpArray = [];
    for(let i = 0; i < arr.length; i++){
        tmpArray.push(f(arr[i]));
    }
    return tmpArray;
}

function f2(x){
    return x * 2;
}
// function f3(x){
//     return x + 10;
// }
const f3 = x => x+10; 
const result = f1([1,2,3],f2);
const result2 = f1([1,2,3],f3);
console.log(result);
console.log(result2);
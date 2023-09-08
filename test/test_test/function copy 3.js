const values = [1,2,3];
const result = values.map((curr, idx, arr) => {
                //   console.log(curr,idx,arr)
                return curr * 2;
                });
console.log(result);

const result2 = values.map((_, idx, __) => {
    //   console.log(curr,idx,arr)
    return idx;
    });
console.log(result2);
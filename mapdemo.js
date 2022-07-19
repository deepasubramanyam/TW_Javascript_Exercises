addby2 = (number) => number + 2;

mapDemo=(arr , afun )=>{
    let output = [];
    for(let i=0;i<arr.length;i++){
        output[i] = afun(arr[i]);
    }
    return output;   
}

arr = [1,2,3,4,5];
console.log(mapDemo(arr,addby2));
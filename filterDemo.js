iseven = (number) => number % 2==0;

filterDemo=(arr , afun )=>{
    let output = [];
    let index = 0;
    for(let i=0;i<arr.length;i++){
        if(afun(arr[i]))
            output[index++]=arr[i];
    }
    return output;
}

arr = [1,4,9,16,25];
console.log(filterDemo(arr,iseven));
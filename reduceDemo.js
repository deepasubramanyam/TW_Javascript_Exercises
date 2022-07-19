addAllArrayElements = (number,sum) => number+sum;

reduceDemo=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=addAllArrayElements(arr[i],sum);
    }
    return sum;
}

arr = [1,4,9,16,25];
console.log(reduceDemo(arr,addAllArrayElements));
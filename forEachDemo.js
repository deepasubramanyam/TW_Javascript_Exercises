printArrElements = (number,index) => console.log(`${index}:${number}`)

forEachDemo=(arr , afun) => {
    for(let i=0;i<arr.length;i++){
        sum=printArrElements(arr[i],i);
    }
    return ;
}

arr = [1,4,9,16,25];
forEachDemo(arr,printArrElements);
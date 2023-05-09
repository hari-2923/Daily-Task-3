let bubbleSort = (arr1) => {
    let limit = arr1.length;
    for (let i = 0; i <= limit - 1; i++){
        for (let j = i+1; j <= limit; j++){
            if(arr1[i] > arr1[j]){
                temp = arr1[i]
                arr1[i] = arr1[j]
                arr1[j] = temp
            }
        }
    }
    return arr1
}

console.log(bubbleSort([12,35,42,67,8]));
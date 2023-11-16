function returnLargestInArray(array){
    let largestVal = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > largestVal){
            largestVal = array[i]
        }
    }

    return largestVal;
}

let array = [ 984, 434, 832, 322, 112, 900]
console.log(returnLargestInArray(array))
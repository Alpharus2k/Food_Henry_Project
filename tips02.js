function sumArray(array, num){
    let retorno = false;
    //const sorted = array.sort((a,b) => a-b)
    let i = 0;
    let j = array.length-1;
    while(i !== j ){
        let result = array[i]+array[j];
        if ( result > num) j--;
        else if( result < num) i++;
        else return true;
    }
    return retorno;
}

console.log( sumArray([2,3,4,5,6,14], 9) );
console.log(sumArray([2,3,4,5,6,14], 19));
console.log(sumArray([2,4,6,14], 21));
console.log(sumArray([2,3,4,5,6,14], 19));
console.log(sumArray([2], 2));
let i = [1,2,3,4,5,6,7,8];
let j = [8,4,2,1,3,7,5,6];

function mergeSort(input) {
    
    if (input.length > 1) {
        let L = input.slice(0, input.length/2);
        console.log(L);
        let R = input.slice(input.length/2);
        console.log(R);
        
        L = mergeSort(L);
        R = mergeSort(R);
        
        let result = [];
        let indexL = 0;
        let indexR = 0;
        
        while (indexL < L.length && indexR < R.length) {
            if (L[indexL] < R[indexR]) {
                result.push(L[indexL]);
                indexL++;
            } else {
                result.push(R[indexR]);
                indexR++;
            }
        }
        
        while (indexL < L.length) {
            result.push(L[indexL]);
            indexL++;
        }
        
        while (indexR < R.length) {
            result.push(R[indexR]);
            indexR++;
        }
        
        console.log(result);
        return result;
    } else {
        return input;
    }
}


console.log("Input: " + j);
console.log("Code running....")
console.log("Output: " + mergeSort(j));
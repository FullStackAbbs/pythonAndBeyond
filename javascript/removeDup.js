// Remove Duplicates
// Input : an array of int , duplicates
 // Edgecase: arrays that would dup. , strings,obj,int (not an array)
// Output : an array without duplicates, characters only appearing once

// Example
// [1 56 23 64 2 1 2] input  --> [1 2 23 53 64]
// 11 ---> unacceptable input

// PC
// First: 
// create an result array
// iterate the input
    // we can check the current element is within the results array (.indexOf)
    // IF TRUE we add the element into the results array
// return result array

const remDup = arr => {
results=[]
arr.forEach((el) => { 
    if(results.indexOf(el) === -1){
        results.push(el)
       console.log('this is not in the array of results')
    }
)˜
return results
}

console.log(remDup([1,56,23,64,2,1,2]))
const remDup = arr => {
    results=[]
    arr.forEach((el) => { // iteration O(N)
        if(results.indexOf(el) === -1){ // iteration O(N)
            results.push(el)
        }}
    )
    return results
    }
    // TC O(N^2)
    remDup([1,56,23,64,2,1,2])





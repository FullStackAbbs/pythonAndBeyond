// make a function that takes in a string (Note: the string must be a sentence) and returns an array containing subarrays for each word
// Each subarray will contain a word from the original string with the first letter capitalized and will have a boolean as a second value
// The second value of the array checked to see if the original string(Note: Before the first letter was capitalized) was a palindrome
// for example console.log(problem2('this is hella poop')) => // returns  [['This', false], ['Is', false], ['Hella', false], ['Poop', true]]
// make sure you write your own error handling

// Input "A string that is a sentence hannah"
// Output an array of arrays that contain the words of the sentence. Each
// // word is captialized, first letter, checked if a the strings of the word produce a palindrome
// Example 
// Psuedocode

// Split the sentence into an array of words
// Iterate through the array of words and captilize the first character
// Use the property aspector while looping through the captilized array of words and give isPalindrome key-value to boolen T/F


function problem2(str){
    // Iterate through the array of words and captilize the first character
    const capitlized = []
    for(let word of str.split(' ')){
        capitlized.push(word[0].toUpperCase() + word.slice(1))
        // test for proper captilization
    }
    outputArr=[]
    isPalindrome = capitlized.map((chkWord) =>{
        // check if palindrome
        output={}
        output['word']=chkWord
        compare2 = chkWord.split('').reverse().join('')
        lowCompare2 = compare2.toLowerCase()
        lowChkWord = chkWord.toLowerCase()
        // cl the words and compare characters
        if (lowChkWord === lowCompare2){
            output['isPalindrone'] = 'true'
        }else{
            output['isPalindrone'] ='false'
        }
        // cl the object output to be sure we get two key-value pairs
        outputArr.push(Object.values(output))
    })
    return outputArr
}

console.log(problem2('this is hella poop'))

// node homework1-1.js
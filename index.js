// Function 1: Finding the Difference between two Numbers
function calculateDifference(num1, num2){
    return Math.abs(num1-num2)
}
// Function 2: Checking whether a number is Odd or Not
function isOdd(num){
    if (num%2==1){
        return true
    } else {
        return false
    }
}

// Function 3: Finding the Minimum Number in an Array
function findMin(arr){
    return Math.min(...arr)
}

// Function 4: Returning the Array with Even Numbers Only
function filterEvenNumbers(arr){
    var result = arr.filter(function(item){
        return (item % 2 == 0);
    });
    return result
}

// Function 5: Taking an Array and sort them to a Descending Order
function sortArrayDescending(arr){
    var sorted = arr.toSorted();
    var descSorted = sorted.toReversed();
    return descSorted;
}

// Function 6: Returning the string with just the first letter converted into Lower Case
function lowercaseFirstLetter(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
}

// Function 7: Returning the number of vowels in a String
function countVowels(string){
    vowels_for_test = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var v_count = 0; var i;
    for (i = 0; i < string.length; i++){
        if (vowels_for_test.includes(string[i])){
            v_count++;
        }
    }
    return v_count;
}

// Function 8: Returning the Average of the elements in an Array
function findAverage(array){
    var sum = 0; var j;
    for (j = 0; j < array.length; j++) {
        sum += array[j]
    }
    return sum/array.length;
}

// Did a test drive on the functions to ensure that I am on the right path
var diff = calculateDifference(3.5, 6.0);
console.log(diff)

var odd = isOdd(3);
console.log(odd)

arr = [1,2,3]
var min = findMin(arr)
console.log(min)

var neoArr = filterEvenNumbers(arr)
console.log(neoArr)

var descArr = sortArrayDescending(arr)
console.log(descArr)

var string = "OsTad"
console.log(lowercaseFirstLetter(string))

var vowelCount = countVowels(string)
console.log(vowelCount)

var avg = findAverage(arr)
console.log(avg)
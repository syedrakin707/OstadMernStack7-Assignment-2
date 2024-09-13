function calculateDifference(num1, num2){
    return num1-num2
}

function isOdd(num){
    if (num%2==1){
        return true
    } else {
        return false
    }
}

function findMin(arr){
    return Math.min(...arr)
}

function filterEvenNumbers(arr){
    var result = arr.filter(function(item){
        return (item % 2 == 0);
    });
    return result
}

function sortArrayDescending(arr){
    var sorted = arr.toSorted();
    var descSorted = sorted.toReversed();
    return descSorted;
}

function lowercaseFirstLetter(string){
    return string.charAt(0).toLowerCase() + string.slice(1);
}

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

function findAverage(array){
    var sum = 0; var j;
    for (j = 0; j < array.length; j++) {
        sum += array[j]
    }
    return sum/array.length;
}

var diff = calculateDifference(9, 3);
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
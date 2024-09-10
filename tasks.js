// Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])

//For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passenger capacity"]=5;
console.log(car)

// Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
const physicsMarks=student["physics"]["marks"];
console.log(physicsMarks)

//Count the number of properties.
let stdent = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
    roll:344,
    batch:22,
};
let count=0;
for(let prop in stdent){
    count++
}
console.log(count);

// Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for(let prop in myObject){
    const value= myObject[prop];
    console.log("key: "+prop+ " | "+"type: " +typeof value);

}
// module 21
// task-3
const array=[34,21,52,324,4324,4324234,32451]
function make_avg(array){
    let sum=0
    for(num of array){
        sum+=num;
    }
    let avg=sum/array.length
    return avg;

}

console.log(make_avg(array));
// task4
function zeroCount(str){
    count=0
    for(let i=0;i<str.length;i++){
        if(str[i]==="0"){
            count++
        }
    }
    return count;
}
const str="110001010101010001001"
console.log(zeroCount(str))
// task 5
function odd_even(number){
    if(number%2===0){
        true;
        return toString(true)
    }
    else{
        false;
        return toString(false)
    }
}
const number=10;
// module 22
// Write a function to count the number of vowels in a string.
function countVowel(str){
    const newstr=str.split("")
    let count=0
    for(let letter of newstr){
        if(letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u"){
            count++;
        }
    }
    console.log(count)
}
const string="aeiourrrruuuuurrrrr";
countVowel(string)
/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/ 
function largestWordFinding(sentence){

    let words=sentence.split(" ")
    let largestWord=words[0];
    for(let word of words){
        if(word.length>largestWord.length){
            largestWord=word
        }
    }
    return largestWord
}
const sentence="I am learning Programming to become a programmer"
largestWordFinding(sentence)
console.log(largestWordFinding(sentence))
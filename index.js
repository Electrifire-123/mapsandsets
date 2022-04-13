/*"Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"*/
//Answer=>>
let string = "abcadeecfb";

let newset = new Set();
for (let i = 0; i < string.length; i++) {
    newset.add(string[i]);
}
let str2 = "";
for (let val of newset.values()) {
    str2 += val;
}
console.log(str2);

/*"Problem:
You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1"
*/
//Answer==>

// let string = "abcadeecfb";
let str1 = string.split("");
let mapOfString = new Map();

for (let i = 0; i < str1.length; i++) {
    let count = 1;
    for (let b = i + 1; b < str1.length; b++) {
        if (str1[i] === str1[b]) {
            count++;
            str1.splice(b, 1);
            b--;
        }
    }
    mapOfString.set(str1[i], count);
}
for (let [key, value] of mapOfString.entries()) {
    console.log(key + "=" + value);
}
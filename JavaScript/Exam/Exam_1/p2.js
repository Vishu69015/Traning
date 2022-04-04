//Program 2 :

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letterArray = ["a", "b", "c", "d", "e"];

let alphaNumeric = numberArray.concat(letterArray);
let alphaNumeric1 = numberArray.concat(letterArray);
let alphaNumeric2 = numberArray.concat(letterArray);

for(let i = 0; i<=10; i++)
{
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random(letterArray) * 5);
    const c = Math.floor(Math.random(alphaNumeric) * 15);
    //const d = Math.floor(Math.random(alphaNumeric1) * 15);
    //const e = Math.floor(Math.random(alphaNumeric2) * 15);

    console.log(letterArray[b], alphaNumeric[c], numberArray[a]);
}
//console.log(a, b, c);

// var randomArray1 = Math.floor(Math.random() * numberArray);
// var randomArray2 = Math.floor(Math.random() * letterArray);

// let alphaNumeric = [" "];

// for (let i = 0; i < randomArray1.length; i++)
// {
//     for (let j = 0; j < randomArray2.length; j++) 
//     {
//         alphaNumeric.push(randomArray1[i] + randomArray2[j] + randomArray2[j]); 
//     }
// }
// console.log(alphaNumeric);
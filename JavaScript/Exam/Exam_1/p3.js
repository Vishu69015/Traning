//Program 3 :

const category = [ "movie", "news", "education", "sports ", "politics" ];
const age = [ "teenager", "adult" ];
// let result = [ ];
// //let sum = 1;

// for (let i = 0; i < category.length; i++)
// {
//     for (let j = i; j <= i; j++) 
//     {
//         let visitors = Math.floor(Math.random() * 101);
//         result = [{age : age, category : category, visitors : visitors}];   
//     }
// }
// console.log(result);

var arrayOutput = [];
for (let i = 0; i <= 100; i++)
{
    let a = Math.floor(Math.random() * 100);
    let b = category[Math.floor(Math.random() * category.length)];
    let c = age[Math.floor(Math.random() * age.length)];
    var obj = {age: c, category: b, visiters: a };
    console.log(obj);
}

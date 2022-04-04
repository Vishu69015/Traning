//P3:- Create 2D array of array and print all the element with it’s indexes.

const array2d = 
[ 
    ["a","b"],
    ["c","d"]
];

console.table(array2d);

for (let i = 0; i < array2d.length; i++)
{
    for (let j = 0; j < array2d.length; j++)
    {
        console.log(array2d [i] [j] + " = " + [i] + [j]);
        
    }
}
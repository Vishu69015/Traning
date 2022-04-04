let v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 1;
let x = " ";

for (let i = 0; i < v.length; i++)
{
    for (let j = 0; j < i; j++)
    {     
        sum += 1;
    }
    x +="\n";   
}
console.log(x);
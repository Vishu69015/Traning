//P4:- Do multiplication elements of two array with same length and create 3rd array.

const array1 = [11,12,13,14,15,16,17,18,19,20];

const array2 = [11,12,13,14,15,16,17,18,19,20];

const array3 = [ ];

for (let i = 0; i < array1.length; i++)
{
    for (let j = 0; j < array2.length; j++)
    {
        if (i == j)
        {
           array3.push(array1[i] * array2[j]);
        }
    }
}
console.log("Your 3rd array is");
console.log(array3);
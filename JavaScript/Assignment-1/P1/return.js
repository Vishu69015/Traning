//P1:- Return true if given variable is divisible by 5 else return 5

function p1(x) 
{
    if (x % 5 == 0) 
    {
        return true;    
    }
    else
    {
        return 5;
    }
}
console.log(p1(10));
console.log(p1(17));
console.log(p1(15));
console.log(p1(12));
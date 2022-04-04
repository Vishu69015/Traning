//P3:-  Return True if given variable is float else return False.

function p3(x)
{
    if (isNaN(x))
    {
        return false;    
    }   
    else if(Number.isInteger(x))
    {
        return false;
    }
    else 
    {
        return true;
    }    
}

console.log(p3(45.92));
console.log(p3(521));
console.log(p3(15.65));
console.log(p3(2033));
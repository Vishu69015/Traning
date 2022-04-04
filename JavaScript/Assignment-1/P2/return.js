//P2:-  Return True if given variable is string else return False.

function p2(x)
{
    if (typeof x == 'string')
    {
        return true;    
    }   
    else
    {
        return false;
    }
}

console.log(p2('vish'));
console.log(p2(521));
console.log(p2('sup'));
console.log(p2(2033));
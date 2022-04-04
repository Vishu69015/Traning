var n = 5;
var s = "";

for (let i = 0; i < n; i++)
{
    for (let j = 0; j < n; j++)
    {
        if (i == j || i+j == n-1)
        {
            s += "#";    
        }
        else
        {
            s += "*"    
        }
    }   
    s += "\n";
}
console.log(s);
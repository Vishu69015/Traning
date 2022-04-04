var n = 5;
var s = "";

for (let i = 1; i <= n; i++)
{
    for (let j = 0; j < i; j++)
    {
        if (i === n)
        {
            s += "*";    
        }
        else if (j == 0 || j == i-1)
        {
            s += "*";
        }
        else
        {
            s += " ";
        }
    }
    s += "\n";
}
console.log(s);
let n = 5;
var s = "";

for (var i = 1; i <= n; i++)
{
    for (let j = 0; j < n; j++)
    {
        if(i+j <= n-1)
        {
            s += " ";
        }
        else
        {
            s += "*";
        }
    }
    s += "\n";   
}
console.log(s);


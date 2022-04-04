let n = 5;
var s = "";

for (var i = 1; i <= n; i++)
{
    for (let j = 0; j < i; j++)
    {
       s += "*";
    }
    s += "\n";   
}
console.log(s);

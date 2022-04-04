var n = 5;
var s = "";

for (let i = -(n+1); i <= n+1; i++)
{
    for (let j = -(n+1); j <= n+1; j++)
    {
        if(i == -(n+1) || i == n+1 || j == -(n+1) || j == n+1)
        {
            s += "0";
        }
        else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0 || j == 0)
        {
            s += String.fromCharCode((Math.abs(i) - Math.abs(j)) + 97);
        }
        else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
        {
            s += Math.abs(i) - Math.abs(j)+1
        }
        else
        {
            s += " ";
        }
    }        
    s += "\n";
}
console.log(s);

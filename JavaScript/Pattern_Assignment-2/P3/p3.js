var n = 13;
var s = "";

for (let i = 0; i < n; i++)
{
    for (let j = 0; j < n; j++)
    {
        if(i == Math.floor(n/2) && j == Math.floor(n/2))
        {
            s += "O";
        }
        else if(i + j == n-1)
        {
            s += "/";
        }
        else if(i == j)
        {
            s += "\\";
        }   
        else if(i < n-1 && j == 0 || i < n-1 && j == n-1)
        {
            s += "|"
        }
        else if(j < n-1 && i == 0 || j < n-1 && i == n-1)
        {
            s += "-"
        }
        else 
        {
            s += " ";
        }
    }        
    s += "\n";
}
console.log(s);
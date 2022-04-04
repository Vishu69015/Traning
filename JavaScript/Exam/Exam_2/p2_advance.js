var n = 5;
var s = "";

for (let i = -(n+1); i <= n+1; i++)
{
    for (let j = -(n+1); j <= n+1; j++)
    {
        if (j == -(n+1) || j == n+1)
        {
            s += "|";
        }
        else if (i == -(n+1) || i == n+1)
        {
            s += "=";
        }
        else if (i == 0 && j == 0)
        {
            s += "X";
        }
        else if (j == i)
        {
            s += "\\";
        }
        else if (Math.abs(i) == Math.abs(j))
        {
            s += "/";
        }
        else if (i == 0 || j ==0)
        {
            s += "O"
        }
        else if (j < 0 && i < 0 && i <= j || j > 0 && i > 0 && i >= j)
        {
            s += Math.abs(j);
        }
        else if (j > 0 && i < 0 && i + j >= 0)
        {
            s += Math.abs(n-j)+1;
        }
        else if (j < 0 && i > 0 && i + j <= 0)
        {
            s += Math.abs(n+j)+1;
        }
        else if(j < 0 && i < 0 && i > j)
        {
            s += String.fromCharCode(Math.abs(j+n+1) + 97);
        }
        else if(j > 0 && i > 0 && i < j)
        {
            s += String.fromCharCode(Math.abs(j-n-1) + 97);
        }
        else if(j < 0 && i > 0 && i+j >= 0)
        {
            s += String.fromCharCode(Math.abs(j) + 97);
        }
        else if(j > 0 && i < 0 && i+j <= j)
        {
            s += String.fromCharCode(Math.abs(j) + 97);
        }
        else
        {
            s += " ";
        }
    }
    s += "\n";
}
console.log(s)
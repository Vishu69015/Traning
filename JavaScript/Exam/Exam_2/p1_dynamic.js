var n =9;
var s ="";

for (let i = 0; i < 1; i++)
{
    for (let j = -n; j <= 0; j++)
    {
        if (i == 0 && j == 0)
        {
            s += "O \n";
        }
        else
        {
            s += " ";
        }
    }
}


for (let k = 0; k < n-1; k++)
{    
    for (let i = 1; i <= n; i++)
    {
        for (let j = -n; j <= n; j++)
        {
            if (i + j == 0)
            {
                s += "/";
            }
            else if(i == j)
            {
                s += "\\";
            }
            else if (i <= n && i >= 1 && i - Math.abs(j) <= n && i - Math.abs(j) > 0)
            {
                s += "-";
            }
            else
            {
                s += " ";
            }
        }
        s += "\n";
    }
}
    
for (let i = (n*n) - (n-1); i < (n*n) + 2; i++)
{
    for (let j = -n; j <= n; j++)
    {
        if (Math.abs(j) == 1 && i > (n*n)-n && i < (n*n)+1)
        {
            s += "|";
        } 
        else if(i == (n*n)+1 || j == 0 &&  i > (n*n)-n)
        {
            s += "=";
        }
        else
        {
            s += " ";
        }
    }
    s += "\n"
}
console.log(s);

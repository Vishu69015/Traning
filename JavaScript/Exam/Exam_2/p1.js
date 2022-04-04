var n =3;
var s ="";

for (let i = 0; i <= n*n+1; i++)
{
    for (let j = -n; j <= n; j++)
    {
        if(i == 0 && j == 0)
        {
            s += "O";
        }
        else if (i + j == 0 || i > n && i + j == n)
        {
            s += "/";
        }
        else if(i == j || i > n && i - j == n)
        {
            s += "\\";
        }
        else if (i <= n && Math.abs(j) < i || i <= n*2 && Math.abs(j)*2 < i)
        {
            s += "-";
        }
        else if (i < n*n+1 && Math.abs(j) == 1 && i > n*2 && Math.abs(j) == 1)
        {
            s += "|";
        } 
        else if(i == n*n+1 || i > n*2 && j == 0)
        {
            s += "=";
        }
        else
        {
            s += " ";
        }
    }
    s += "\n";
}
console.log(s);
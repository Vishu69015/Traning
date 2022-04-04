let n = 5;

for (let i = 0; i < n; i++)
{
    let s = "";
    for (let j = -n; j < n; j++)
    {
        if (Math.abs(i)-Math.abs(j) >= 0) 
        {
            s += Math.abs(i) - Math.abs(j)+1;
        }
        else
        {
            s += " ";
        }
    }
    console.log(s);
}

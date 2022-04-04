var n = 5;
var s = "";

for (let i = -n; i <= n; i++)
{
    if(i == 0)
    {
        continue
    }
    for (let j = -n; j <= n; j++)
    {
        if(j == 0)
        {
            continue
        }
        if (Math.abs(i) + Math.abs(j) <=n+1 && Math.sign(i) == Math.sign(j))
        {
            s += "@";    
        }
        else
        {
            s += " ";
        }
    }   
    s += "\n";
}
console.log(s);



// let n = 4;

// for (let i = -n; i <= n; i++)
// {
//     if(i==0)
//     {continue }
//     let s = "";
//     for (let j = -n; j <= n; j++)
//     {
//         if(j==0)
//         {continue}
//         if (Math.abs(i)+Math.abs(j) >= n+2) 
//         {
//             s += "-";
//         }
//         else
//         {
//             s += "@";
//         }
//     }
//     console.log(s);
// }

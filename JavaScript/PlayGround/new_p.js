var n = 6;
var s = "";

for (let i = 1; i <= n; i++)
{
    for (let j = 0; j < i; j++)
    {
        if (j == 0)
        {
            s += i;    
        }      
        // else
        // {
        //     s += "";
        // } 
    }
    console.log(s);
}
   
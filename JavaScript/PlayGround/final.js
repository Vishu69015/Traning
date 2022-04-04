
var n = 10;

for(let i = -(n+1); i <= n+1; i++)
  {
      console.log('\n');
      var print = ""
      for(let j = -(n+1); j <= n+1; j++)
      {
          if(j == -(n+1) || j == n+1)
          {
              print += "|";
          }
          else if(i == -(n+1) || i == n+1)
          {
              print += "=";
          }
          else if(i == 0 && j == 0)
          {
              print += "X";
          }
          else if (i == 0) 
          {
                print += "O"    
          }
          else if (j == 0) 
          {
                print += "0"    
          }
          else if(i == j)
          {
              print += "\\";
          }
          else if(Math.abs(i) == Math.abs(j))
          {
              print += "/";
          }
          else if (j < 0 && i < 0 && i < j || j > 0 && i > 0 && i > j) 
          {
                print += Math.abs(j)
          }
          else if(j > 0 && i < 0 && i + j > 0)
          {
                print += Math.abs(n-(j-1));
          }
          else if (i > 0 && j < 0 && i + j < 0)  
          {
            print += Math.abs(n+(j+1));
          }
          else if (i < 0 && j < 0 || i > 0 && j > 0 && Math.abs(i) - Math.abs(j) <= 1)
          {
              print += String.fromCharCode(98+n-Math.abs(j))
          }
          else if (j > 0 && i < 0 || i > 0 && j < 0 && Math.abs(i) - Math.abs(j) >= 1)
          {
              print += String.fromCharCode(97+Math.abs(j))
          }
          else
          {
              print += "*";
          }
      
      }
   console.log(print);
  }

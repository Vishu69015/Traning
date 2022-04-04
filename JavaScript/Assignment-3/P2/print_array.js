//P2:- Print all the elements of the array.

const shopName = ["Kamal-Hardware","R.K.Enterprise","Girsh-Enterprise"];
let sLength = shopName.length;
let shop = "";

for (let i = 0; i < sLength; i++)
{
    shop += shopName[i];
    console.log(shopName[i]);  //Printing the array’s element as list.
}

console.log(shopName);  //Printing the array’s element.
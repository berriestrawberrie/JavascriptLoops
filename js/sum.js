

//GENERATE A RANDOM ARRAY OF LENGTH 5
function randomArray(){
    const temparray = [];

    for(i=0; i<5;i++){
        temparray[i] = Math.floor(Math.random()*10)+1;
    }

    return temparray;

}

//GET RANDOM ARRAY FROM FUNCTION
const myArray = randomArray();

function sumEvenNumbers(myArray){

   let sum = 0;
   
   for(i=0; i<myArray.length; i++){

        if(myArray[i] % 2 == 0 ){

            sum = sum + myArray[i];
        }
   }//END OF FOR

   return sum; 
}//END OF FUNCTION

//GET THE SUM FROM FUNCTION
let sum = sumEvenNumbers(myArray);

//OUTPUT TO HTML
document.getElementById("arrayoutput").innerHTML = myArray;
document.getElementById("sumoutput").innerHTML = sum;


//OUTPUT TO CONSOLE
console.log(`Your array is: ${myArray} 
The sum of the even numbers is: ${sum}`);
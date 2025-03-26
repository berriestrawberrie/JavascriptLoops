
const myArray = [33,12,5,8,99];

function sumEvenNumbers(myArray){

   let sum = 0;
   
   for(i=0; i<myArray.length; i++){

        if(myArray[i] % 2 == 0 ){

            sum = sum + myArray[i];
        }
   }//END OF FOR

   return sum; 
}//END OF FUNCTION

sum = sumEvenNumbers(myArray);

console.log(`Your array is: ${myArray} 
The sum of the even numbers is: ${sum}`);
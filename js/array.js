let length = prompt("How long is your array?");


function generateRandomArray(length){
    
    const myArray = [];

    for( i=0; i<length; i++){

        myArray[i] = Math.floor(Math.random()*100)+1;

    }//END FOR

    return myArray;
}//END FUNCTION


myArray = generateRandomArray(length);

alert(`Your random array of ( ${length} ) length is ${myArray}`);


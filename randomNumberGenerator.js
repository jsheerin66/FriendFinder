var numbersArray = [];

function generateRandomNumbers(array){
  for (var i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random()* 5 + 1)
  }
  console.log(array)
}
generateRandomNumbers(numbersArray);

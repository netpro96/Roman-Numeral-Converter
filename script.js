const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const form = document.getElementById("form");

const romanNumber = num => {
    const rN = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const resultNumber = [];
  
    /*The foreach using the while will loop through the rN array to get the value higher or equal than the entered number,
    then it will assign it to the resultNumber array */
    rN.forEach(function (arr) {
      while (num >= arr[1]) {
        /*It will look through the array, for example if you input 12, it will get the value of X because is equal or higher than that array,
        then it will push the value of 10 to the resultNumber array */
        resultNumber.push(arr[0]);
        /*Following the last example, this code will substract the value entered with the one on the array,
        Then the foreach will run again until the value gets to 0*/
        num -= arr[1];
      }
    });
  
    return resultNumber.join('');
  };

convertBtn.addEventListener('click', () => {
  romanizeNumber()});

form.addEventListener('submit', (e) => {
      e.preventDefault();
      romanizeNumber();
  });

  const checkInputEntered = () => {
    let inputValue = input.value;
    
  /*The if statements will check if number entered is between 1 - 3999 to call RomanNumber function
    Otherwise, will get a message asking user to avoid entered the input submited */
    if (inputValue <= -1){
      result.classList.toggle('hidden');
      result.innerText = "Please enter a number greater than or equal to 1";
      
    } else if (inputValue >= 4000) {
      result.classList.toggle('hidden');
      result.innerText = "Please enter a number less than or equal to 3999";
    } else if (inputValue === ""){
      result.classList.toggle('hidden');
      result.innerText = "Please enter a valid number";
    } else {
      result.classList.toggle('hidden');
      result.innerText = romanNumber(inputValue);
    }
  };

  const romanizeNumber = () => {
    /* Before calling the function that will check input entered and convert it to Roman number,
      I will clear the input entered if user tried converting a number before*/
    result.innerText = "";
    result.classList.toggle('hidden');

    checkInputEntered();
    
  };



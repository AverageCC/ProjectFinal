function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function playGame() { // This function is called when the user clicks the button
    const choices = ['rock', 'paper', 'scissors']; // const is a variable that cannot be reassigned which establishes the choices for the computer.
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // This line of code randomly selects a choice for the computer by generating a random number between 0 and 2 and then using that number to select a random option from the array.
    const userChoice = prompt("Please choose and option. Rock, Paper or Scissors?").toLowerCase(); // This prompts the user to enter a choice without case sensitivity.

    // This while loop checks if the user's response is valid. If the user's choice is not valid then the user is prompted to enter a valid choice.
    while (choices.indexOf(userChoice) === -1) {
        if (userChoice === 'shoot') {
            alert("You shouldn't bring a gun to a rock, paper, scissors fight!"); // This is my little easter egg. If the user types 'shoot' then this alert is displayed.
            return; // This resets the user menu.
        }
        userChoice = prompt("Invalid choice. Please choose Rock, Paper or Scissors.").toLowerCase(); // This prompts the user to enter a valid choice with no regard of case sensitivity.
    }

    if(userChoice === computerChoice) { // This checks if the user and computer responses are the same. If they're the same then the It's a tie! alert is displayed.
        alert(`It is a tie! The computer also chose ${computerChoice}`);
    } else if( // This checks if the user has a winning combination.
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') // || is used for OR
    ) {
        alert(`You win! The computer chose ${computerChoice}.`); // If the user wins then the alert displays the winning message.
    } else {
        alert(`You lose! The computer chose ${computerChoice} `); // If the user loses then the alert displays the losing message.
    }
}

function palindromeCheck() { // Creates the function palindromeCheck
    var str = document.getElementById("palindrome").value; // Gets the value of the input field, "palindrome" from strings.html line 10. User input string
    var lowRegStr = str.toLowerCase(); // Converts the user input string to lowercase
    var isPalindrome = true; // Initializes the variable isPalindrome to true
    for (var i = 0; i < lowRegStr.length / 2; i++) { // This checks to see if the user input is a palindrome by comparing the first and last characters of the string, then the second and second to last characters, and so on. if they remain the same, the string is a palindrome. If they are different, the string is not a palindrome.
        if (lowRegStr[i] !== lowRegStr[lowRegStr.length - 1 - i]) { // If the first character and the last character calculated by the length of the string minus 1 minus i are not the same then it is not a palindrome
            isPalindrome = false; // this sets the value, "isPalindrome" to false
            break; // this breaks the loop
        }
    }
    if (isPalindrome) { // If the value of isPalindrome is true then it will execute the below and if not then it will execute the else statement
        document.getElementById("result").innerHTML = "Yes, it is a palindrome."; // This will update the <p> tag with the id "result" in strings.html on line 14 to say "Yes, it is a palindrome."
    } else { // If the value of isPalindrome is false then it will execute the following
        document.getElementById("result").innerHTML = "No, it is not a palindrome."; // This will update the <p> tag with the id "result" in strings.html on line 14 to say "No, it is not a palindrome."
    }
}

function validationCheck(firstName, lastName, zipCode) { // Function to check if the input is valid
    if (!firstName || !lastName || !zipCode) { // Check if any of the inputs are empty. All input variables firstName, lastName, and zipCode are all referenced in strings.html input lines 14, 16, 18.
        return false; // If any of the inputs are empty, it will be invalid
    }

    var zipCodeNumber = Number(zipCode); // Convert zipCode to a number
    if (isNaN(zipCodeNumber) || zipCode.length !== 5) { // Check if zipCode is not a number referenced to by isNaN [in JS this is the operator for Not a Number] or if it is not exactly equal to a 5 digit number
        return false; // If zipCode is not a number or not exactly 5 digits, it will be invalid
    }

    return true; // If all the conditions are met, the input will be valid
}

let dx = 2; // Change in x direction
let dy = 2; // Change in y direction
let intervalId; // ID of the interval

const img = document.getElementById('myImage');

function startMovement() {
    // Only start a new interval if one is not already running
    if (!intervalId) {
        intervalId = setInterval(() => {
            let x = img.offsetLeft;
            let y = img.offsetTop;

            // Check if the image hit the edge of the screen
            if (x + img.offsetWidth > window.innerWidth || x < 0) dx = -dx;
            if (y + img.offsetHeight > window.innerHeight || y < 0) dy = -dy;

            // Move the image
            img.style.left = x + dx + 'px';
            img.style.top = y + dy + 'px';
        }, 20); // 20 milliseconds = 50 frames per second
    }
}

function stopMovement() {
    if (intervalId) {
        clearInterval(intervalId); // Clear the interval
        intervalId = null;
    }
    
    img.style.left = '0px'; // Reset image position
    img.style.top = '0px';
}

function validateForm(event) { // Function to validate the form input
    var firstName = document.getElementById('firstName').value; // Get the value of the firstName input
    var lastName = document.getElementById('lastName').value; // Get the value of the lastName input
    var fullName = firstName + ' ' + lastName; // Combine the firstName and lastName to create a fullName

    if (fullName.length > 20) { // Check if the fullName variable is greater than 20 characters
        alert('Full name cannot exceed 20 characters'); // If the fullName is greater than 20 characters, an alert will pop up saying, "Full name cannot exceed 20 characters"
        return; // Stops the execution of the function
    }

    var zipCode = document.getElementById('zipCode').value; // Get the value of the zipCode input

    if (zipCode.length !== 5 || isNaN(zipCode)) { // Check if the zipCode is not exactly 5 digits or if it is not a number
        alert('Zip code must be exactly 5 digits'); // If the zipCode is not exactly 5 digits or not a number, an alert will pop up saying, "Zip code must be exactly 5 digits"
        return; // Stops the execution of the function
    }

    event.preventDefault(); // Prevent the form from submitting if it's invalid

    if (firstName === "" || lastName === "" || zipCode === "") { // Check if any of the inputs are empty
        document.getElementById('result').textContent = 'Invalid input'; // If any of the inputs are empty, the result will say, "Invalid input"
    } else {
        document.getElementById('result').textContent = 'Valid input'; // If all the inputs are filled, the result will say, "Valid input"
        document.getElementById('secretMessage').style.display = 'block'; // This will display the secret message if the input is valid
    }
}

document.getElementById('validationForm').addEventListener('submit', validateForm); // Event listener to the form to check if it's valid when it's submitted -bug fix needed
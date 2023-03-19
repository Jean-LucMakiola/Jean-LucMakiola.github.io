// Define an array of uppercase letters
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Define an array of lowercase letters
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Define an array of numbers
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Define an array of special characters
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?'];

// Define a function named `generateRandomPassword` that takes a `length` parameter
function generateRandomPassword(length) {
  // Define an array to store the characters that will be used to generate the password
  let characters = [];
  
  // Add at least one uppercase letter to the `characters` array
  characters.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
  
  // Add at least one lowercase letter to the `characters` array
  characters.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
  
  // Add at least one number to the `characters` array
  characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  
  // Add at least one special character to the `characters` array
  characters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  
  // Generate additional characters to fill out the password length
  for (let i = characters.length; i < length; i++) {
    // Randomly choose a type of character to add to the `characters` array
    const characterType = Math.floor(Math.random() * 4);
    
    // Add a character of the chosen type to the `characters` array
    switch (characterType) {
      case 0:
        // Add a random uppercase letter
        characters.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
        break;
      case 1:
        // Add a random lowercase letter
        characters.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
        break;
      case 2:
        // Add a random number
        characters.push(numbers[Math.floor(Math.random() * numbers.length)]);
        break;
      case 3:
        // Add a random special character
        characters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        break;
    }
  }
  
  // Shuffle the `characters` array to randomize the password
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }}

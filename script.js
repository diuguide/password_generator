const generateBtn = document.querySelector('#generate');
const textBox = document.querySelector('#password');
const charSetlettersUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const charSetlettersLower = ["abcdefghijklmnopqrstuvwxyz"];
const charSetSpecial = ["!@#$%^&*?"];
const charSetNumbers = ["0123456789"];

generateBtn.addEventListener('click', function writePassword() {
    const passLength = prompt('Length of Password:');
    const passUpper = confirm('Do you want to include uppercase letters?');
    const passLower = confirm('Do you want to include lowercase letters?');
    const passSpecial = confirm('Do you want to include !@#$%^&*?');
    const passNumber = confirm('Do you want to include Numbers?');
    const passConfirm = confirm('PLEASE REVIEW :: Your password will have ' + passLength + ' characters ' + '|| Include uppercase: ' + passUpper + ' || Include lowercase: ' + passLower + ' || Include special characters: ' + passSpecial + ' || Include numbers: ' + passNumber);

    if (passUpper === true && passLower === true && passSpecial === true && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersUpper + charSetlettersLower + charSetSpecial + charSetNumbers;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      }
    } else if (passUpper === false && passLower === true && passSpecial === true && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersLower + charSetSpecial + charSetNumbers;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === true && passSpecial === true && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersLower + charSetSpecial;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === true && passSpecial === false && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersLower + charSetNumbers;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === true && passLower === false && passSpecial === true && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetSpecial + charSetlettersUpper + charSetNumbers;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === true && passLower === false && passSpecial === true && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetSpecial + charSetlettersUpper;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === true && passLower === false && passSpecial === false && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetNumbers + charSetlettersUpper;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    }
    document.getElementById("password").innerHTML = generatePassword(passLength);
  });
  
  
   
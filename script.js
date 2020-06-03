const generateBtn = document.querySelector('#generate');
const textBox = document.querySelector('#password');
const cardBox = document.querySelector('#wholecard');
const charSetlettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charSetlettersLower = "abcdefghijklmnopqrstuvwxyz";
const charSetSpecial = "!@#$%^&*?";
const charSetNumbers = "0123456789";
generateBtn.addEventListener('click', function writePassword() {
    textBox.textContent = ''; 
    const passLength = prompt('Length of Password: (Must be between 8-128 characters)');
      if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
      alert("Password length must be a number between 8 and 128, Please Try Again.");
      return;
      }
    alert('Please click OK for YES and Cancel for NO');  
    const passUpper = confirm('Do you want to include uppercase letters?');
    const passLower = confirm('Do you want to include lowercase letters?');
    const passSpecial = confirm('Do you want to include !@#$%^&*?');
    const passNumber = confirm('Do you want to include Numbers?');
    alert('PLEASE REVIEW :: Your password will have ' + passLength + ' characters ' + '|| Include uppercase: ' + passUpper + ' || Include lowercase: ' + passLower + ' || Include special characters: ' + passSpecial + ' || Include numbers: ' + passNumber);
    
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
    } else if (passUpper === true && passLower === false && passSpecial === false && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersUpper;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === true && passSpecial === false && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersLower;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === false && passSpecial === true && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetSpecial;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === false && passSpecial === false && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetNumbers;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === true && passLower === true && passSpecial === false && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetlettersLower + charSetlettersUpper;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    }
    document.getElementById("password").innerHTML = generatePassword(passLength);
  });
  
  
   
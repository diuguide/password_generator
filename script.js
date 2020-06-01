const generateBtn = document.querySelector('#generate');
const textBox = document.querySelector('#password');
const charSetlettersUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const charSetlettersLower = ["abcdefghijklmnopqrstuvwxyz"];
const charSetSpecial = ["!@#$%^&*?"];
const charSetNumbers = ["0123456789"];

generateBtn.addEventListener('click', function writePassword() {
    const passLength = prompt('Enter a number for the length of your password between 8-128');
    const passUpper = confirm('Include Upper Case letters?');
    const passLower = confirm('Include Lower Case Letters?');
    const passSpecial = confirm('Include Special Characters?');
    const passNumber = confirm('Include Numbers?');
    const passConfirm = confirm('Length:' + passLength + ' Uppercase: ' + passUpper + ' Lowercase: ' + passLower + ' Special Characters: ' + passSpecial + ' Numbers: ' + passNumber +'?');

    console.log(passLength);
    console.log(passUpper);
    console.log(passLower);
    console.log(passSpecial);
    console.log(passNumber);
    console.log(passConfirm); 

    if (passUpper === true && passLower === true && passSpecial === true && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetNumbers + charSetSpecial + charSetlettersLower + charSetlettersUpper;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      }
    } else if (passUpper === false && passLower === true && passSpecial === true && passNumber === true) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetNumbers + charSetSpecial + charSetlettersLower;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === true && passSpecial === true && passNumber === false) {
      function generatePassword (passLength) {
        let password = '';
        let charSet = charSetSpecial + charSetlettersLower;
        
        for (let i=0; i < passLength; i++ ) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }  
        return password;
      } 
    } else if (passUpper === false && passLower === true && passSpecial === false && passNumber === true) {
      function generatePassword () {
        password = '';
        charSet = charSetNumbers + charSetlettersLower;
        for (let i=0; i < passLength; i++ )
          password += charSet(Math.floor(Math.random() * char_list.length));
          return password;
      }
      
    }console.log(generatePassword(passLength));
    document.write('Here is your password: ' + generatePassword(passLength)); 
  });
  
   
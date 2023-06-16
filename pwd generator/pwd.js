const resultDom = document.getElementById("re1");  
const copybtnDom = document.getElementById("copy");
const lenghtDom = document.getElementById("length");
const uppercasedom = document.getElementById("upper");
const numberdom = document.getElementById("number");
const symboldom = document.getElementById("symbol");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("pwdg");

const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));
   
  function arrayFromLowToHigh(low, high){
    const arr=[];
    for(let i =low;i<=high;i++)
    {
        arr.push(i);
    }
    return arr;
  }

  let generatePassword =(characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols)=>{
      let charCodes = LOWERCASE_CODES;
      if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
      if(includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
      if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
          
      const passwordCharacters = [];
      for(let i=0;i<characterAmount;i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
      }
      
      return passwordCharacters.join("");
      
    };
    copybtnDom.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      const passwordToCopy = resultDOM.innerText;
      // A Case when Password is Empty
      if (!passwordToCopy) return;
      // Copy Functionality
      textarea.value = passwordToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      alert("Password Copied to Clipboard");
    });
    
   
      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const characterAmount = lenghtDom.value;
        const includeUppercase = uppercasedom.checked;
        const includeNumbers = numberdom.checked;
        const includeSymbols = symboldom.checked;
        const password = generatePassword(characterAmount,
          includeUppercase,
          includeNumbers,
          includeSymbols);
          resultDom.innerText = password;
      });
      
    
    
  
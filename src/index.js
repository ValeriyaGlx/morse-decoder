const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('');

    const newArray = [];
    const Arr = [];
    let resultArr;
    let string = '';
    
  
    for (let i = 0; i < expr.length; i += 10) {
      newArray.push(expr.slice(i, i + 10));
    }
  
  
    for(let j=0; j < newArray.length; j++){
      for(let k=0; k < 10; k++){ 
        if(newArray[j][0]==='0'){newArray[j].shift() }
        if(newArray[j][k]==='*'){newArray[j].splice(0,2)}
      }
    Arr[j] = newArray[j];
  
     Arr[j] = Arr[j].filter((a,i) => i % 2 !== 0)
     string += decode(Arr[j])
    }
  
    function decode(arr){
      let morse = '';
  
      if (arr=='*'){return ' '} 
      else { let str = arr.join('')     
    
      while (str.length > 0) {               
        str.slice(0, 1) == '1' ? morse += '-' : morse += '.';  
        str = str.slice(1, str.length); 
      }}
    return MORSE_TABLE[morse]
    }
    
     return string;
}

module.exports = {
    decode
}
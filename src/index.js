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
    // write your solution here
    const lengthLetter = 10;
    let wordsMorse = [];
    let charsMorse = [];
    for(let i = j = 0; i < expr.length; j++) {
        charsMorse.push(expr.slice(i, i+lengthLetter));
        i += lengthLetter;
        let letter = charsMorse[j];
        let symbol = '';
        let codeSymbol= '';
        for(let k = 0; k < lengthLetter; k ++) {
            codeSymbol = letter[k] + letter[k+1];
            switch(codeSymbol){
                case('10'): { symbol += '.'; k += 1; break; }
                case('11'): { symbol += '-'; k += 1; break; }
                case('**'): { symbol += ' '; k += lengthLetter; break; }
                default: continue;
            }
        }
        wordsMorse.push(symbol);
        symbol = '';
    }
    // for(let char of charsMorse)
    //     console.log(char); 
    let res = '';        
    for(let word of wordsMorse) {
        res += word != ' ' ? MORSE_TABLE[word] : ' ';
    }
    return res;
}

module.exports = {
    decode
}
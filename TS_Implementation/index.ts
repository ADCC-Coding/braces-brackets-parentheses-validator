import 'core-js/es6';
import 'core-js/es7/reflect';

let openers: Array<string> = ['{', '[', '('];
let closers: Array<string> = [')', ']', '}'];

function validateBrackets(input: string): boolean {

    let stackOfChars: Array<string> = new Array();

    for (let _i = 0; _i < input.length; _i++) {

        let char: string = input[_i];

        if (openers.includes(char)) {
            stackOfChars.push(char);
        } else if (closers.includes(char)) {
            if (stackOfChars.length <= 0) {                
                return false;
            } else {
                let lastOpener: string = stackOfChars.pop();
                switch (lastOpener) {
                    case '{':
                        if (char != '}')
                            return false;
                        break;
                    case '(':
                        if (char != ')')
                            return false;
                        break;
                    case '[':
                        if (char != ']')
                            return false;
                        break;
                }
            }
        }
    }

    return stackOfChars.length === 0;
}


var input1: string = "{adf(asd)[ee](asdfadsf[adsfadfs{adfsasdf}aasdf]asdfa)}";
var input2: string = "{ [ ] ( ) }";
var input3: string = "{ [ ( ] ) }";
var input4: string = "{ [ }";
var input5: string = ")))(((";
var input6: string = "()()()";
var input7: string = "()()())";

console.log(validateBrackets(input1));
console.log(validateBrackets(input2));
console.log(validateBrackets(input3));
console.log(validateBrackets(input4));
console.log(validateBrackets(input5));
console.log(validateBrackets(input6));
console.log(validateBrackets(input7));
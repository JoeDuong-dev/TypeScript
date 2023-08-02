
function add (n1: number, n2: number, showResult: boolean, phrase: string){
    /* This is how you would do it without TypeScript
    if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error ('Incorrect input!')
    }
    */
   const result = n1 + n2; //We are doing the math here to avoid string conversion.
    if (showResult){
        console.log (phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhase)

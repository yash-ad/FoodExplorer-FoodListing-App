import { sum } from "/Chapter 13-Time for the test/code/src/components/sum";

//Test function,It accepts Two arguments,The first is string and the second is function callback function:-

test("Sum function should be calculate `sum of two numbers`",()=>{
const result = sum(4,4)

//Assertion:-
//expect(result).toBe(0); //Failed : Received - 8 , Expected - 0.
expect(result).toBe(8); //Passed.
});
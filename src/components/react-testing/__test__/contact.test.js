import { render,screen } from "@testing-library/react";
import Contact from "/Chapter 13-Time for the test/code/src/components/Contact";
import "@testing-library/jest-dom";

//The React-testing-library provides Utilities functions like `render,screen`.

// //1.Unit testing with the component `Contact`:-
// test("should load contact us component",() => {
// render(<Contact />);

// //Querying:-
// const heading = screen.getByRole('heading');


// //Assertion:-
// expect(heading).toBeInTheDocument();

// });


// //2.Unit testing with the component `Contact`:-
// //Here we are testing whether the `inputs` in the component are available or not.
// test("should load 2 input boxes into the Contact component",()=>{
// render(<Contact/>)

// //Querying
// // const inputBoxes = screen.getByRole('input'); Failed
// const inputBoxes = screen.getAllByRole('textbox');  
// console.log(inputBoxes.length); //3

// //Assertion
// //expect(inputBoxes.length).toBe(2);//Expected 2 , Received 3.
// expect(inputBoxes.length).toBe(3); //Sucessfully passed.

// });

// //3.Unit testing with the component `Contact`:-
// //Here we are testing whether the `button` is available or not into the component.
// test("should load button into the Contact component",()=>{

//     render(<Contact/>)

//     //Querying
//     const button = screen.getByRole('button');

//     //Assertion
//     expect(button).toBeInTheDocument(); //Succesfully passed.

// });


// //4.Unit testing with the component `Contact`:-
// test("should load `Name` from into the Contact component",()=>{
//     //Rendering
//     render(<Contact/>)

//     //Querying
//     const textTester = screen.getByText('Name');

//     //Assertion
//     expect(textTester).toBeInTheDocument(); //Passed
// })




///Lets use `Describe()` block to group the test cases:-
//Keep in mind that `Describe()` function is a part of `jest`
//In this example `Describe("",()=>{})` function it takes two arguments, the first is string to describe the group of tests, and the second arguement is callback function.

describe("These are the Group test cases related to the Contact component.",()=>{
    //1.Unit testing with the component `Contact`:-
    test("should load contact us component",() => {
        render(<Contact />);
        
        //Querying:-
        const heading = screen.getByRole('heading');
        
        
        //Assertion:-
        expect(heading).toBeInTheDocument();
        
        });
        
        
        //2.Unit testing with the component `Contact`:-
        //Here we are testing whether the `inputs` in the component are available or not.
        test("should load 2 input boxes into the Contact component",()=>{
        render(<Contact/>)
        
        //Querying
        // const inputBoxes = screen.getByRole('input'); Failed
        const inputBoxes = screen.getAllByRole('textbox');  
        console.log(inputBoxes.length); //3
        
        //Assertion
        //expect(inputBoxes.length).toBe(2);//Expected 2 , Received 3.
        expect(inputBoxes.length).toBe(3); //Sucessfully passed.
        
        });
        
        //3.Unit testing with the component `Contact`:-
        //Here we are testing whether the `button` is available or not into the component.
        test("should load button into the Contact component",()=>{
        
            render(<Contact/>)
        
            //Querying
            const button = screen.getByRole('button');
        
            //Assertion
            expect(button).toBeInTheDocument(); //Succesfully passed.
        
        });
        
        
        //4.Unit testing with the component `Contact`:-
        test("should load `Name` from into the Contact component",()=>{
            //Rendering
            render(<Contact/>)
        
            //Querying
            const textTester = screen.getByText('Name');
        
            //Assertion
            expect(textTester).toBeInTheDocument(); //Passed
        })
    });
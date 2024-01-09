//Lets create a test case for `Search` input:-
import { render,screen,act, fireEvent } from "@testing-library/react";
import Body from "/Chapter 13-Time for the test/code/src/components/Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/Restaurantlistmockdata.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



//Lets create a mock fetch for testing:-
//The `global.fetch` is mocked using ` jest.fn` to simulate the behavior of a real fetch call.
global.fetch = jest.fn(()=>{
//The mock `returns a Promise.resolve()` with the expected data structure.
return Promise.resolve({
    json:()=>{
        return Promise.resolve(MOCK_DATA)
    },
});
});

describe("Test cases for `Search` input and Searching for Top Rated Restaurants",()=>{
    //1.
    test("Should `Search` in the list of restaurants ,Only search for `Desserts` text input", async ()=>{

        //The `act()` function is used to make sure that all updates to the state and props of your components are applied and processed before your test assertions.
         // `act()` function returns a promise , here we are using `await`.
        await act(async () => render(
       <BrowserRouter>
        <Body/>
        </BrowserRouter>
        ));
             
        //Lets test for `Search` button in to the body component
       
       //Querying
       const cardsBeforeSearch = screen.getAllByTestId("restaurantList");

        expect(cardsBeforeSearch.length).toBe(9); //Passed

        const searchButton = screen.getByTestId("clickSearchButton"); //Passed
       
        const searchInput = screen.getByPlaceholderText("Satisfy your hunger now !") //Passed
       
        fireEvent.change(searchInput,{target:{value:"Desserts"}}); //Passed
       
        fireEvent.click(searchButton); //Passed
       
        const cardsAfterSearch = screen.getAllByTestId("restaurantList");//Passed
       //  console.log(cardsAfterSearch);
       
       expect(cardsAfterSearch.length).toBe(4); //Passed
       
        //Assertion
        expect(searchInput).toBeInTheDocument();
       });
       
    //2.
    test("Should `load` `Top Rated Restaurants` clicking on the button",async ()=>{
await act(async()=>{
render(
<BrowserRouter>
<Body/>
</BrowserRouter>
)
})

const cardsBeforeSearch = screen.getAllByTestId('restaurantList');

expect(cardsBeforeSearch.length).toBe(9);

const searchForTopRatedRestaurants = screen.getByRole('button',{name:'Top Rated Restaurants'});

fireEvent.click(searchForTopRatedRestaurants)

expect(searchForTopRatedRestaurants).toBeInTheDocument(); //Passed

const cardsAfterSearch = screen.getAllByTestId('restaurantList');

expect(cardsAfterSearch.length).toBe(8);

});

})


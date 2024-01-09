import { render,screen } from "@testing-library/react";
import RestaurantCard from "/Chapter 13-Time for the test/code/src/components/RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantCardmockdata.json";
import "@testing-library/jest-dom";


//1.Test case is for whether the RestaurantCard component is rendered with `props` data or not:-
test("should render the RestaurantCard Component with the `props` data",()=>{

    //However there is `props` data included into the RestaurantCard component ans we want to use it:-
    //Rendering:-
    render(<RestaurantCard restaurantData={MOCK_DATA}/>)

    //Querying:-
    const restaurantCardData = screen.getByText('KFC');

    //Assertion:-
    expect(restaurantCardData).toBeInTheDocument('KFC');
})



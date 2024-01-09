//Lets write test cases for the `Header` component:-
import { render,screen,fireEvent} from "@testing-library/react";
import Header from "/Chapter 13-Time for the test/code/src/components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utilities/appStore";
import { BrowserRouter } from "react-router-dom";


//1.To Test button for rendering whether the button is rendered or not into the header component. 
test("Should render `button` into the `header component`",()=>{
//Rendering
render(
    <BrowserRouter>
<Provider store={appStore} >
<Header/>
</Provider>
</BrowserRouter>
);

//Querying
const Button = screen.getByRole('button');

//Assertion
expect(Button).toBeInTheDocument();
});

//2.
test("Should render `button` into the `header component`",()=>{
    //Rendering
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    //Querying
    const loginButton = screen.getByRole('button',{name:"Login"});
    
    //Assertion
    expect(loginButton).toBeInTheDocument();
    });
    

//3.
test("Should render `button` into the `header component`",()=>{
    //Rendering
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    //Querying
    const cartItems = screen.getByText('Cart');
    
    //Assertion
    expect(cartItems).toBeInTheDocument();
    });

//4.
test("Should render `login and logout toggle button` into the `header component`",()=>{
    //Rendering
    render(
        <BrowserRouter>
    <Provider store={appStore} >
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    //Querying:-
    const loginButton = screen.getByRole('button',{name:"Login"});

    //FireEvent:-
    fireEvent.click(loginButton)

    //Querying:-
    const logoutButton = screen.getByRole('button',{name:"Logout"});

    //Assertion:-
    expect(logoutButton).toBeInTheDocument();
    });
    
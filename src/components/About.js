import { Link } from "react-router-dom";


const About = ()=> {
    return(
<div className="about">
<div className="about-us-page">
<div className="about-page-left">
<img src="https://gimmeyummy.com/wp-content/uploads/2022/06/Sedurra-dessert-scaled.jpg" alt=""/>
</div>
<div className="about-page-right">
    <h1>About FoodExplorer</h1>
  <p>Discover culinary excellence with FoodExplorer, your premier destination for extraordinary dining. We curate top-tier local eateries, offering diverse cuisines through an easy-to-use platform. Enjoy seamless ordering, swift deliveries, and a celebration of flavors at every meal. Welcome to FoodExplorer - where exceptional dining is just a click away!</p>
  <Link to={"/"}><button>Explore More</button></Link>
</div>
</div>
</div>
    )
};







































// import React from "react";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import UserContext from "../utilities/UserContext";

// class About extends Component{
//     constructor(props){
//        super(props) 
//     }



//     componentDidMount(){
//     }

//     render(){
//         return(
//             <div className="about-us-container">
//             <h1>About Us</h1> 
//             <div>
//             User :<UserContext.Consumer>
//                 {/* {({loggedInUser})=> loggedInUser} */}
//                 {({loggedInUser})=> <h1>{loggedInUser}</h1>}
//             </UserContext.Consumer></div>
//             <UserClass name={"First"} location={"First class"}/>
//             </div>)
//     }
//     };







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.FOR PRACTICE PURPOSE ONLY:-

///.Classbased Component:-
// class About extends Component{
//     constructor(props){
//        super(props) 
//     // console.log("Parent constructor called");
//     }
//     componentDidMount(){
//         // console.log("Parent componentDidMount called");
//     }
//     render(){
//         // console.log("Parent render called")
//         return(
//             <div className="about-us-container">
//             <h1>About Us</h1> 
//             {/* <UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/>
//             <UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/> */}
//             <UserClass name={"First"} location={"First class"}/>
//             {/* <UserClass name={"Second"} location={"Second class"}/>
//             <UserClass name={"Third"} location={"Third class"}/>
//             <UserClass name={"Fourth"} location={"Fourth class"}/>
//             <UserClass name={"Fifth"} location={"Fifth class"}/> */}
            
//             </div>)
//     }
//     };


///.Outputs in the console:-
// 1.Parent constructor called
// 2.About.js:17 Parent render called
// 3.UserClass.js:12 Child constructor called
// 4.UserClass.js:20 Child render called
// 5.UserClass.js:16 Child componentDidMount called
// 5.About.js:14 Parent componentDidMount called

//When there are Two child components:-
// 1.Parent constructor called
// 2.Parent render called
// 3.First Child constructor called
// 4.First Child render called
// 5.Second Child constructor called
// 6.Second Child render called
// 7.First Child componentDidMount called
// 8.Second Child componentDidMount called
// 9.Parent componentDidMount called


//When there are more components:-
// There are Two phases in mounting lifecycle methods:-
      //Phase 1.Render phase:-
// Parent constructor called
// Parent render called
//  First Child constructor called
//  First Child render called
//  Second Child constructor called
// Second Child render called
//  Third Child constructor called
//  Third Child render called
//  Fourth Child constructor called
//  Fourth Child render called
//  Fifth Child constructor called
//  Fifth Child render called

// {In between React updates the dom}

      //Second phase.Commit phase
//  First Child componentDidMount called
//  Second Child componentDidMount called
//  Third Child componentDidMount called
//  Fourth Child componentDidMount called
//  Fifth Child componentDidMount called
//  Parent componentDidMount called


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///.Functional Component:-
// const About = ()=>{ 
// return(
// <div className="about-us-container">
// <h1>About Us</h1> 
// {/* <User name={"Yash dandnaik (functional)"} location={"Pune (functional)"}/> */}
// <UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/>
// </div>
// )
// }

export default About;
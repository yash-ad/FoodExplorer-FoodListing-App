import React from "react";


class UserClass extends React.Component{
    constructor(props){   
        super(props)
this.state = {
userInfo:{
name:"Default name",
email:"Default",
location:"Default",
bio:"Default",
}
}
  };

async componentDidMount(){
 const data = await fetch("https://api.github.com/users/yash-ad");
 const json = await data.json();
//  console.log(json);

this.setState({
userInfo:json,
})

this.timer = setInterval(()=>{
// console.log("Namaste-React")
},1000);
};

componentDidUpdate(){
console.log("componentDidUpdate");
};

componentWillUnmount(){
clearInterval(this.timer);
}

render(){
    const{name,location,blog,bio,avatar_url} =  this.state.userInfo;
    return(
        <div className="user-card">
            <img src={avatar_url}></img>
        <div>Name: {name}</div>
        <div>Email: {blog}</div>
        <div>Location: {location}</div>
        <p>Bio: {bio}</p>
        </div>
        )
}
};






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.FOR PRACTICE PURPOSE ONLY:-
// class UserClass extends React.Component{
//     constructor(props){   
//         super(props)
// this.state = {
// count : 0,
// message:"Hello React,Im in a `this.state{}` In a constructor special method from Classbased component"

// }
// console.log(this.props.name + " Child constructor called");
//     };

// componentDidMount(){
// console.log(this.props.name + " Child componentDidMount called");
// };

// render(){
//     console.log(this.props.name + " Child render called");
//     const{name,location} =  this.props;
//     const{count,message} = this.state;
//     return(
//         <div className="user-card">
//         <div>Name:{name}</div>
//         <div>Location:{location}</div>
//         {/* <h3>Count:{this.state.count}</h3>
//         <h4>Message:{this.state.message}</h4> */}

//         {/* Whenever a state variable updates,react triggers a reconciliation process or cycle it will re-renders the component. */}
//         <h3>Count:{count}</h3>
//         <button onClick={()=>{
// this.setState({
// count:this.state.count + 1,
// message:"Hello React ,Tadaaa , Im using `this.setState()` to update myself.",
// })
//         }}>Click Here</button>
//         <h4>Message:{message}</h4>
//         </div>
//         )
// }
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default UserClass;
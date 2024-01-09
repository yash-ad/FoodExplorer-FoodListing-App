import {useState, useEffect } from "react";

const useOnlineStatus = ()=>{
const[onlineStatus,setOnlineStatus]= useState(true);

//Lets add an useEffect hook it renders after the component and it will be render only at once intial render.
useEffect(()=>{
    //Lets add an eventlistener when the user an `offline` event  status there will be  `false` value.
    //The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.
    window.addEventListener("offline",()=>{
setOnlineStatus(false);
    })

    //Likewise,When the user an online status there will be `true` value.
    //The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
},[])



    return onlineStatus;
}

export default useOnlineStatus;
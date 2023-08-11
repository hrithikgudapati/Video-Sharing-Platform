const { createSlice } = require("@reduxjs/toolkit");


let LoginSlice=createSlice({
    name:"Login",
    initialState:{
        IsLogin:false,
        token:""
    },
    reducers:{
        setLogin:(state)=>{
            return state.IsLogin=true;
        },
        setLogOut:(state)=>{
            return state.IsLogin=false
        },
        setToken:(state,payload)=>{
            console.log(payload)
            return state.token=payload.token
        }
    }

})


let LoginReducer=LoginSlice.reducer

let {setLogin,setLogOut,setToken}=LoginSlice.actions

export{
    LoginSlice,
    LoginReducer,
    setLogin,
    setToken,
    setLogOut
}
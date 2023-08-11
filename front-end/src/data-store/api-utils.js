function DoLogin(UserData){
    return fetch("http://localhost:9000/user/login",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "accept":"application/json"
        },
        body:JSON.stringify(UserData)
    }).then((res)=>{res.json()})
}


export{
DoLogin
}
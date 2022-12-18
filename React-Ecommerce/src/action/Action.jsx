export const Register=(data)=>{
    return{
        type:"SIGNUP",
        payload:data
    }
}

export const Login =(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
}

export const Logout=()=>{
    return{
        type:"LOGOUT"
    }
}

export const Addcard=(data)=>{
    return{
        type:"ADD_CARD",
        payload:data
    }
}

export const Removecard=(id)=>{
    return{
        type:"REMOVE_CARD",
        payload:id
    }
}

export const Removeqnty=(item)=>{
    return{
        type:"REMOVE_QNTY",
        payload:item
    }
}
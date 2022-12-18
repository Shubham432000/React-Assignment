
// form action
export const formData =(data)=>{
    return{
        type:"FORMDATA",
        payload:data
    }
}

export const deletData =(data)=>{
    return{
        type:"DELETDATA",
         payload:data
        
    }
}

export const editData =(data)=>{
    return{
        type:"EDITDATA",
         payload:data
        
    }
}

export const updateValue =(data)=>{
    return{
        type:"UPDATEVALUE",
         payload:data
        
    }
}

// account2
export const accountValue =(data)=>{
    return{
        type:"ACCDATA",
        payload:data
    }
}

export const accountDelet =(data)=>{
    return{
        type:"ACCDELET",
        payload:data
    }
}

export const accountEdit =(data)=>{
    return{
        type:"ACCEDIT",
        payload:data
    }
}

export const accountUpdate =(data)=>{
    return{
        type:"ACCUPDATE",
        payload:data
    }
}


// deparment action

export const depaValue =(data)=>{
    return{
        type:"DEPDATA",
        payload:data
    }
}

export const depaDelet =(data)=>{
    return{
        type:"DEPDELET",
        payload:data
    }
}

export const depaEdit =(data)=>{
    return{
        type:"DEPEDIT",
        payload:data
    }
}

export const depaUpdate =(data)=>{
    return{
        type:"DEPUPDATE",
        payload:data
    }
}

// account action

export const signUp =(data)=>{
    return{
        type:"SIGNUP",
        payload:data
    }
}

export const logIn =(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
}

export const logOut =()=>{
    return{
        type:"LOGOUT",
        
    }
}
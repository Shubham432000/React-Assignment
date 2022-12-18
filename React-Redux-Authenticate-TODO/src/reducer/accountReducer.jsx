const initialState = {};
 
const login = (state, { email, password }) => {
    console.log("state2",state)
  return {
    ...state,
    email,
    password,
    isLoggedIn: true
  };
};

const signUp = (state,{name,email,password}) => {
   // console.log("state1",state);
    console.log("payload",name,email,password)
  return {
      ...state,
    isLoggedIn: false,
    name,
    email,
    password
  };
};

const logout = (state) => {
  return {
     ...state,
    isLoggedIn: false
  };
}

  const accountReducer = (state=initialState , action) => {
    console.log("state3",state);
    switch (action.type) {
      case "LOGIN":
        return login(state, action.payload);

      case "SIGNUP":
        return signUp(state,action.payload);

      case "LOGOUT":
        return logout(state);

      default:
        return state;
    }
  };
  
export default accountReducer;
  
const initialState = {
  Info: [],
};

const depaData = (state, payload) => {
  return {
    ...state,
    Info: [...state.Info, payload],
  };
};

const depaDelet = (state, payload) => {
  const newList = state.Info.filter((item) => item.id !== payload);
  console.log("delelt", newList);
  // console.log("action",action.payload)
  console.log("state2", state);

  return {
    ...state,
    Info: newList,
  };
};

const depaEdit = (state, payload) => {
  const updateList = state.Info.find((item) => item.id == payload);

  return {
    ...state,
    Info1: updateList,
  };
};

const depaUpdate = (state, payload) => {
  console.log("update value", state, payload);

  const newData = state.Info.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  console.log("newvalue", newData);
  console.log("newstate", state);
  return {
    ...state,
    Info: newData,
  };
};

const deparmentReducer = (state = initialState, action) => {
  console.log("deparment", state);
  switch (action.type) {
    case "DEPDATA":
      return depaData(state, action.payload);
    case "DEPDELET":
      return depaDelet(state, action.payload);

    case "DEPEDIT":
      return depaEdit(state, action.payload);

    case "DEPUPDATE":
      return depaUpdate(state, action.payload);

    default:
      return state;
  }
};

export default deparmentReducer;

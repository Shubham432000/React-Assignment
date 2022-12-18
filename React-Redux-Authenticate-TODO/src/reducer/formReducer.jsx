const initialState = {
  Data: [],
};
//console.log("initialState",initialState)
const formValue = (state, payload) => {
  return {
    ...state,

    // Data: [...(state.Data || []), payload],
    Data: [...state.Data, payload],
  };
};

const deletValue = (state, payload) => {
  const newList = state.Data.filter((item) => item.id !== payload);
  console.log("delelt", newList);
  // console.log("action",action.payload)
  console.log("state2", state);

  return {
    ...state,
    Data: newList,
  };
};

const editData = (state, payload) => {
  const updateList = state.Data.find((item) => item.id == payload);

  return {
    ...state,
    Data1: updateList,
  };
};

const updateValue = (state, payload) => {
  console.log("update value", state, payload);

  const newValue = state.Data.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  console.log("newvalue", newValue);
  console.log("newstate", state);
  return {
    ...state,
    Data: newValue,
  };
};

const formReducer = (state = initialState, action) => {
  console.log("state", state, action);
  switch (action.type) {
    case "FORMDATA":
      return formValue(state, action.payload);

    case "DELETDATA":
      return deletValue(state, action.payload);

    case "EDITDATA":
      return editData(state, action.payload);

    case "UPDATEVALUE":
      return updateValue(state, action.payload);

    default:
      return state;
  }
};
export default formReducer;

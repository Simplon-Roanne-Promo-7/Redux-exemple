import logToto from "./logToto";
const initialState = { color: "#456", name: "alexandre" };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGER_LES_COULEURS":
      logToto(action.payload);
      return { ...state, color: action.payload };
    case "CHANGER_LE_NOM":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

import { applyMiddleware, createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import reducers from "./reducers/reducers";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunk]));
};

export const wrapper = createWrapper(initStore);

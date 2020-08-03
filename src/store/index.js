import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducers/plants";

import thunk from "redux-thunk";

const reducer = combineReducers({
  plant: reducer
});

const middleware = [thunk];

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

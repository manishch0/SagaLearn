// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import ProductSaga from "./ProductSaga";
// import createSagaMiddleware from "redux-saga";

// const store = createStore({
//   rootReducer,
//   middleware: () => [sagaMiddleware],
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import ProductSaga from "./ProductSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(ProductSaga);
export default store;

//   ek call back call hota h middleware saga mai

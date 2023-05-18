// * means genater function we use to call async opertion
import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("https://fakestoreapi.com/products/");
  data = yield data.json();
  console.log("api call saga", data);
  yield put({ type: SET_PRODUCT_LIST, data });
  //   put ka use krte h hum log type ko send krne ke liye data ko retrive krne ke liye
}

// function* searchData(result) {
//   let search = yield fetch(`https://fakestoreapi.com/products?q=${result.query}`);
//   search = yield search.json();
//   console.log("search api call", search);
//   yield put({ type: SEARCH_PRODUCT, result: search });
// }

function* ProductSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  //   yield takeEvery(SEARCH_PRODUCT, searchData);
}
export default ProductSaga;

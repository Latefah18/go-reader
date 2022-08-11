import { IArticle } from "../../type.t";
import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action:any = {
    type: actionTypes.ADD_ARTICLE,
    article
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: any = {
    type: actionTypes.REMOVE_ARTICLE,
    article
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: any) {
  return (dispatch:any) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

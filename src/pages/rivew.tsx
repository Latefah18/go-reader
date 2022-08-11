import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store,applyMiddleware } from "redux";
import App from "../components/rivew";
import reducer from "../components/store/reducer";
import thunk from "redux-thunk";
import { Layout } from "../components/Layout";


 const store: Store<any, any> & {
  dispatch: any;
} = createStore(reducer, applyMiddleware(thunk));


export function Viewpage():any {
 const rootElement = document.getElementById("root");
render(
  <Layout>
  <Provider store={store}>
  
  <App></App>
  </Provider>
  </Layout>,
  rootElement
);

}
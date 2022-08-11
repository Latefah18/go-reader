
import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";


import { addArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import { IArticle } from "../type.t";
import { Article } from "./Article";
import { AddArticle } from "./AddArticle";


const App: React.FC = () => {
    const articles: readonly IArticle[] = useSelector(
      (state: any) => state.articles,
      shallowEqual
    );
  
    const dispatch: Dispatch<any> = useDispatch();
  
    const saveArticle = React.useCallback(
      (article: IArticle) => dispatch(addArticle(article)),
      [dispatch]
    );
 
  
    return (
   
        <><div className="head p-6"><img src="" alt="book" /></div><h1 className="head3">Add your rivew</h1><main>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article: IArticle) => (
                <Article
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle} />
            ))}
        </main></>
    );
  };
  
  export default App;
  
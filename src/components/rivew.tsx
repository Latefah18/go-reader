
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
 
    // <img src="   https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632632557l/11870085.jpg" alt="" width={200} height={200}/>
    return (
          
        <><div className="flex ">  <div><  img className="mt-7 pl-6" src="   https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632632557l/11870085.jpg" alt="" width={200} height={200}/>
        </div> <div><h1 className="head3">✨Add your rivew ✨</h1> </div> </div><main>
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
  
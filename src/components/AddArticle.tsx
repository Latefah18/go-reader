import * as React from "react";
import { IArticle } from "../type.t";
import { Rating } from 'primereact/rating';
import { useState } from "react";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="name"
        onChange={handleArticleData}
      />
 
      <input
        type="text"
        id="body"
        placeholder="write your rivew "
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  );
};

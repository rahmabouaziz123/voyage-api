import React from "react";
import { CardArticle } from "./CardArticle";

export const ListArticles = ({ info }) => {
  return (
    // <div> {infoArticle&&React.Children.toArray(infoArticle.articles.map(el=><CardArticle  art={el}/>))}</div>
    <div className="listArticle">
      <h1 className="pragr1"> Business & Leisure Travel</h1>

      <div className="pragr">
        <hr />
        <p>
          {" "}
          La Floride est un État du sud-est des États-Unis, bordé par l'océan
          Atlantique d'un côté et par le golfe du Mexique de l'autre. Elle
          comprend des centaines de kilomètres de plage. La ville de Miami est
        </p>
        <p>
          {" "}
          réputée pour ses influences culturelles latino-américaines, sa scène
          artistique et sa vie nocturne, en particulier dans le quartier huppé
          de South Beach. La ville d'Orlando est quant à elle connue pour ses
          parcs à thème
        </p>
        <p>
          J’ai déjà pris l’avion car nous sommes allés à Rome en Italie, il y a
          deux ans. A Barcelone, mes parents ont réservé un appartement près de
          la plage. Mes parents souhaitent louer des vélos pour visiter
          Barcelone.
        </p>
        <p> notamment Walt Disney World</p>
        <hr />
      </div>

      {info &&
        React.Children.toArray(
          info.map((el, i) => <CardArticle car={el} i={i} />)
        )}
    </div>
  );
};

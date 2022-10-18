

import React from 'react'
import { CardArticle } from './CardArticle'

export const ListArticles = ({info}) => {




  return (
    // <div> {infoArticle&&React.Children.toArray(infoArticle.articles.map(el=><CardArticle  art={el}/>))}</div>
    <div  className='listArticle'>
      <div className='pragr'>
        La Floride est un État du sud-est des États-Unis, bordé par l'océan
        Atlantique d'un côté et par le golfe du Mexique de l'autre. Elle
        comprend des centaines de kilomètres de plage. La ville de Miami est
        réputée pour ses influences culturelles latino-américaines, sa scène
        artistique et sa vie nocturne, en particulier dans le quartier huppé de
        South Beach. La ville d'Orlando est quant à elle connue pour ses parcs à
        thème, notamment Walt Disney World
      </div>
        {info &&
       
          React.Children.toArray(info.map((el,i)=>(<CardArticle car={el} i={i} />)))
          }
      </div> 
  )
}

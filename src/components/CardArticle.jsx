import React from "react";

export const CardArticle = ({ car, i }) => {
  return (
    // <div key={i} className="cardArticle">
    //   <div> {car && car.source.name}</div>

    //   <div> {car && car.source.id}</div>

    //   <div> {car && car.author}</div>
    //   <div>{car && car.title} </div>
    //   <a href={car && car.url}> lien</a>
    //   <img src={car.urlToImage} alt={car.urlToImage} />
    //   <div>{car.publishedAt}</div>
    //   <div> {car.content}</div>
    // </div>

    <div key={i}>
      
      <div id="container"  className="container-fluid">
        <div className="product-details">
          <h1>{car && car.author}</h1>

           <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span> 

          <p className="information">
            <div> {car.content}</div>
            <div> {car.publishedAt}</div>
          </p>
        </div>

        <div className="product-image">
          <img src={car.urlToImage} alt={car.urlToImage} />

          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong> {car && car.author} </strong>
                {car && car.source.name}
              </li>
              <li>
                <strong>Soil Needs: </strong>Damp
              </li>
              <li>
                <strong>Zones: </strong>9 - 11
              </li>
              <li>
                <strong>Height: </strong>2 - 3 feet
              </li>
              <li>
                <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
              </li>
              <li>
                <strong>Features: </strong>Tolerates heat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

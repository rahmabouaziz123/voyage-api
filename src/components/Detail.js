import React from "react";
import { useParams } from "react-router-dom";

export const Detail = ({ data }) => {
  const { author } = useParams();

  const item = data.find((el) => el.author == author);

  return (
    <div className="detail">
      {/* <div key={i}> */}

      <div id="container">
        <div className="product-details">
          <h1>{item.author}</h1>

          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p className="information">
            <div> {item.content}</div>
            {/* <div> {car.publishedAt}</div> */}
          </p>
        </div>

        <div className="product-image">
          <img src={item.urlToImage} alt={item.urlToImage} />

          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong> {item.author} </strong>
                {item.source.name}
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

import React from "react";
import { Carousel } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="homecursol">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/43k9SJUsYbw/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Florida</h3>
            <p>Située à l'extrême sud-est des Etats-Unis, la Floride est bordée au Nord par l'Alabama et la Georgie. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thehappytrip.com/wp-content/uploads/2019/08/kuala-lumpur-1820944_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>gouala lampur</h3>
            <p>Une promenade dans les rues de Kuala Lumpur donne l'impression de voyager entre l'antiquité et le présent..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a.cdn-hotels.com/gdcs/production95/d1039/1b151500-b69c-11e8-8c08-0242ac110002.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Miami</h3>
            <p>
            Miami est une ville internationale à la pointe sud-est de la Floride.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

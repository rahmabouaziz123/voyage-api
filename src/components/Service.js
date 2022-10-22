import React from "react";
import { Card } from "react-bootstrap";

export const Service = () => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Text className="contactParag1">
          Tout le monde parle de voyage. La simple évocation d'un voyage nous
          fait rêver. Nous sommes curieux d'aller voir comment les choses se
          passent ailleurs. Souvent, nous prenons la route guidés par le désir
          de rencontrer l'Autre... L'inconnu, la différence, le lointain nous
          interpellent. Les motivations pour partir sont nombreuses: sortir du
          quotidien, s'enfuir, se reposer, découvrir, se dépayser. .. Le voyage
          est une sorte de mise entre parenthèses de nos repères habituels, il
          implique un décalage du temps et de l'espace. Ce sont ces aspects du
          voyage qui ont servi de contexte à notre recherche qui porte sur la
          rencontre de l'Autre en voyage et sur l'appréhension du voyage comme
          une expérience d'apprentissage
        </Card.Text>
        <Card.Img
          variant="top"
          src="https://business-contact-gabon.com/wp-content/uploads/AOV.-Services.jpg"
        />
      </Card>
    </div>
  );
};




import React from 'react'
import { Card } from 'react-bootstrap'

export const Aceuil = () => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Text className="contactParag2">
          L'Office national des aéroports est l'établissement public chargé des
          aéroports et du contrôle de la navigation aérienne au Maroc. En 2012,
          il a accueilli plus de 5,2 millions de passagers1 après une année de
          décrue liée aux conséquences de la révolution de 2011. Il est la base
          d'opération de la compagnie aérienne nationale Tunisair et de sa
          filiale Tunisair Express mais il est aussi utilisé par les compagnies
          privées tunisiennes comme Nouvelair et Syphax Airlines.
        </Card.Text>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/vecteurs-libre/page-accueil-vente-voyages-photo_52683-44158.jpg"
        />
      </Card>
    </div>
  )
}

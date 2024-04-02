import React, { useState } from 'react';
import Navigation from './Navigation';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(/img/poster2.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  // Utilisation du hook d'état pour gérer l'affichage du texte
  const [afficherTexte, setAfficherTexte] = useState(false)
  const [bottontext,setbottontext]= useState("Cliquez ici pour plus de détails")
  ;

  // Fonction appelée lors du clic sur le bouton
  const handle = () => {
    // Mettre à jour le state pour afficher le texte
    setAfficherTexte(!afficherTexte);
    setbottontext((p) => (p === "Cliquez ici pour plus de détails" ? "afficher moins" : "Cliquez ici pour plus de détails"))
  }

  return (
    <div style={backgroundImageStyle}>
      <Navigation />
      <div className='test'>
        <h1>Le Grand Tournoi de Marrakech</h1>
        <p>
        est un événement footballistique emblématique qui capte l'attention et l'enthousiasme des amateurs de football du monde entier. Chaque année, des équipes venant des quatre coins du globe convergent vers la magnifique ville de Marrakech, au Maroc, pour participer à cette compétition de prestige. Célébrant la passion pour le football, le tournoi offre un spectacle inégalé, mettant en vedette des talents exceptionnels, des moments palpitants et une atmosphère électrique.          </p>
        {afficherTexte && (
          <p>
           Les rues de Marrakech résonnent du bourdonnement de l'excitation alors que les supporters se rassemblent pour soutenir leurs équipes préférées. Les couleurs vives des drapeaux flottent dans l'air, créant une mosaïque vibrante de cultures et de nationalités unies par l'amour du jeu. Les stades, épicentres de l'action, deviennent le théâtre de confrontations épiques où la compétition est féroce, et chaque équipe aspire à inscrire son nom au palmarès du Grand Tournoi de Marrakech.


          </p>
        )}
        <button  className='detail'  onClick={handle}>{bottontext}</button>
      </div>
    </div>
  );
};

export default Home;

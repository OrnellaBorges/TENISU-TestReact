import { useParams } from "react-router-dom";
// Autres imports...

export default function PlayerDetail({ players }) {
  const { id } = useParams();
  console.log("ID du joueur:", id);
  console.log("Données des joueurs:", players);

  // Recherche du joueur correspondant à l'ID dans la liste des joueurs
  const player = players.find((player) => player.id === id);
  console.log("Joueur trouvé:", player);

  if (!player) {
    return <p>Joueur non trouvé</p>;
  }
  return (
    <div>
      {/* Affichez les détails complets du joueur ici */}

      <h1>Player Detail Page for ID: {id}</h1>
    </div>
  );
}

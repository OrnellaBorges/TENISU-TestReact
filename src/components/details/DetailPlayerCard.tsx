import { useParams } from "react-router-dom";
// Autres imports...

export default function PlayerDetail() {
  const { id } = useParams();
  // Utilisez l'ID pour récupérer les détails complets du joueur depuis votre source de données

  return (
    <div>
      {/* Affichez les détails complets du joueur ici */}
      <h1>Player Detail Page for ID: {id}</h1>
    </div>
  );
}

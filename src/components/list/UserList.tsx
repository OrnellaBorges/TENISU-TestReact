import { Users } from "../../api/usersApi";

export default function UserList({ state }) {
  console.log("state", state);

  // creation d'une fonction qui va permettre de dynamiser

  const filteredUsers = Users.filter((user) => {
    // mode mutiligne
    function concatLetters() {
      /*
    PERSONNE = ""
    CHEMIN= user.first_name

    POUR i allant de 0 jusqu'a la longueur de INPUT

           // PERSONNE = PERSONNE + CHEMIN[i]
*/

      let personne = "";
      const chemin = user.first_name;

      for (let i = 0; i <= state.length; i++) {
        personne = personne + chemin[i];
      }

      /*
pour chaque le
SI je reçois une seule lettre 
    ALORS la fonction doit retourner user.first_name[0] 

SI je reçois 2 lettres 
    ALORS la fonction doit retourner user.first_name[0] + user.first_name[1] 

SI je reçois 3 lettres 
    ALORS la fonction doit retourner user.first_name[0] + user.first_name[1] + user.first_name[2] 
*/

      return personne;
    }

    //return concatLetters().toLowerCase().includes("emi");
    //return (user.first_name[0] + user.first_name[1] + user.first_name[2]).toLowerCase().includes("emi");
    return concatLetters().toLowerCase().includes(state);
    // a faire avec la methode REDUCE()
  });

  return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </ul>
  );
}

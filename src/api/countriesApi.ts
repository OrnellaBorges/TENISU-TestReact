import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export async function getAllCountries() {
  const res = await axios.get(url);
  console.log("response from api for countries", res);
  return res;
}

/* async function fetchCountryName(countryCode: string): Promise<string> {
  const response = await fetch(
    `https://restcountries.com/v3/alpha/${countryCode}`
  );
  const data = await response.json();
  return data.name.common; // Récupérer le nom complet du pays à partir de la réponse JSON
}

// Exemple d'utilisation :
const countryName = await fetchCountryName("SRB"); // Remplacez "SRB" par le code du pays requis
console.log(countryName); // Affichera "Serbie" */

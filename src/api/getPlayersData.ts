import axios from "axios";

const url = "https://data.latelier.co/training/tennis_stats/headtohead.json";

export async function getAllPlayers() {
  const res = await axios.get(url);
  console.log("response from api", res);
  return res;
}

import axios from "axios";
import { ResponsePlayerType } from "../types/playerType";

const url = "https://data.latelier.co/training/tennis_stats/headtohead.json";

export async function getAllPlayers() {
  const res: ResponsePlayerType = await axios.get(url);
  console.log("response from api", res);
  return res;
}

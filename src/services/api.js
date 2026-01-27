import { httpGet } from "./http";
import { parsePage } from "./pagination";

const BASE_URL = "http://localhost:8080/games";

export const getAllGames = async () => {
  // should take argument for pagination params
  const data = await httpGet('') // data used to be undefine/a promise without await
  return parsePage(data);
};

export const getAllGamesByPlayer = async (page) => {
  //console.log("Fetching games for player LeBron James, page:", page);
  const data = await httpGet(`/search?first=Lebron&last=James&page=${page}`) // CHECKME
  return parsePage(data);
};
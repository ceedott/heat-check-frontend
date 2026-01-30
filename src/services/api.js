import { httpGet } from "./http";
import { parsePage } from "./pagination";

const BASE_URL = "http://localhost:8080/games";

export const getAllGames = async () => {
  // should take argument for pagination params
  const data = await httpGet('') // data used to be undefine/a promise without await
  return parsePage(data);
};

export const getAllGamesByPlayer = async ({first, last, page}) => {
  // encode first name, last name, and page
  const params = new URLSearchParams({first, last, page});
  const data = await httpGet(`/search?${params.toString()}`) // CHECKME
  return parsePage(data);
};
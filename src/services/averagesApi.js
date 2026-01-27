import { httpGet } from "./http";

const BASE_URL = "http://localhost:8080/games";

export const getPlayerAverages = async () => {
    const response = await httpGet("/averages?first=lebron&last=james")
    return response; // dont need to parse page bc response isnt paginated
}
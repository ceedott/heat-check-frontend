import { httpGet } from "./http";

const BASE_URL = "http://localhost:8080/games";

export const getPlayerAverages = async ({ first, last }) => {
    // encode first and last name
    const params = new URLSearchParams({ first, last });
    const response = await httpGet(`/averages?${params.toString()}`);
    return response; // dont need to parse page bc response isnt paginated
}
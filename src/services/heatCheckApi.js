import { httpGet } from "./http"

export const getHeatCheck = async ({ first, last }) => {
    const params = new URLSearchParams({ first, last });
    const response = await httpGet(`/heat_check?${params.toString()}`);
    return response;
}
// put custom http get function in here
export async function httpGet(path) {
    const BASE_URL = "http://localhost:8080/games";
    const response = await fetch(`${BASE_URL}${path}`);

  // check status code of response
  if (!response.ok) {
    const error = await response.json().catch(() => ({})); // returns empty object if not json
    throw {
      status: response.status,
      message: error.message || error.error || "Request failed" // flexible error message
    };
  }

  // safe to parse
  return response.json();
}
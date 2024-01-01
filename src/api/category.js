import HttpRequest from "../utilities/js/http-request";

const axios = HttpRequest("/api/categories");

export function getCategories() {
    return axios.get("").then(({data}) => data);
}
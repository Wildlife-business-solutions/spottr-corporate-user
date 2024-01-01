import HttpRequest from "../utilities/js/http-request";

const axios = HttpRequest("/products");

export function createProduct({ info }) {
    return axios.post("",
        { info },
    ).then(({ data }) => data);
}

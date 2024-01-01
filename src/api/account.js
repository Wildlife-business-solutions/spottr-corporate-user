import HttpRequest from "../utilities/js/http-request";

const axios = HttpRequest("/user/account");

export function getProfile() {
    return axios.get("/profile")
        .then(({ data }) => data);
}

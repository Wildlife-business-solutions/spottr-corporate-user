import HttpRequest from "../utilities/js/http-request";

const axios = HttpRequest("/api/auth");

export function forgotPassword({identifier}) {
    return axios.post("/forgot-password",
        {identifier},
    ).then(({data}) => data);
}

export function login({identifier, password}) {
    return axios.post("/sign-in", {identifier, password})
        .then(({data}) => data);
}

export function register({firstName, lastName, username, email, phoneNumber, countryCode, country, dialCode, password, roleId, avatar, referralCode}) {
    return axios.post('/sign-up', {firstName, lastName, username, email, phoneNumber, countryCode, country, dialCode, password, roleId, avatar, referralCode})
        .then(({data}) => data)
}

export function generateOTP({identifier}) {
    return axios.post("/generate-otp", {identifier})
        .then(({data}) => data)
}

export function verifyOTP({identifier, code}) {
    return axios.post('/verify-otp', {identifier, code})
        .then(({ data }) => data)
}

export function resetPassword({email, code, password, confirmPassword}) {
    return axios.post('/reset-password', {email, code, password, confirmPassword})
        .then(({data}) => data)
}

export function getMyProfile() {
    return axios.get("me").then(({data}) => data)
}
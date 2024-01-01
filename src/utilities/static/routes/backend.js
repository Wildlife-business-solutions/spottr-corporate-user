export const baseUrl = "https://newbackendapi.azurewebsites.net";

//corporate
export const SIGNUPUSER = `${baseUrl}/user/auth/register`;
export const VALIDATEUSERNAME = `${baseUrl}/user/auth/username`;
export const LOGINUSER = `${baseUrl}/user/auth/login`;
export const UPLOADPICTURE = `${baseUrl}/utils/upload`;
export const UPLOADMULTIPLE = `${baseUrl}/utils/upload/multiple`;
export const UPDATEPROFILE = `${baseUrl}/user/account/cooperate/profile`; //token
export const GETPROFILEDATA = `${baseUrl}/user/account/profile`;
export const SENDOTP = `${baseUrl}/user/auth/phone_number`;
export const VALIDATEOTP = `${baseUrl}/user/auth/phone_number/verify`;
export const ADDPRODUCT = `${baseUrl}/products`;
export const GETCATEGORIES = `${baseUrl}/utils/categories`;

//wallets
export const GETWALLET = `${baseUrl}/api/wallets`;

export const GETWALLETHISTORY = (id) => `${baseUrl}/transaction/${id}`;
export const GETRATES = `${baseUrl}/utils/rate`;

// profile
export const GETCOUNTRIES = "https://restcountries.eu/rest/v2/all";

export const PUTPROFILE = `${baseUrl}/user/account/profile`;
export const PUTPROFILEURL = `${baseUrl}/user/account/profile_url`;
export const PUTPROFILECATALOG = `${baseUrl}/user/account/profile/catalog`;
export const PUTPROFILECONTACT = `${baseUrl}/user/account/profile/contact`;

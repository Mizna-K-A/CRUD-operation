import serverUrl from "./baseURL.JS";
import commonAPI from "./commonAPI.JS";


export const uploadBookAPI = async (uploadBook) => {
    return await commonAPI("POST", `${serverUrl}/books`, uploadBook);
}

export const getBookAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/books`, "");
}

export const deleteBookAPI = async (bookId) => {
    return await commonAPI("DELETE", `${serverUrl}/books/${bookId}`, "");
};

import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        url,
        method: httpMethod,
        data: reqBody
    };

    try {
        const response = await axios(reqConfig);
        return response; // Return the actual response
    } catch (error) {
        return error.response || { status: 500, message: 'An error occurred' }; // Return error object if any
    }
};

export default commonAPI;

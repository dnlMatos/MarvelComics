import api from "../constants/connection";

export const detalhaCartoon = async (id) => {
    try {
        const { data } = await api.get(`${baseURL}/comics/${id}`)
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const cartoonList = async () => {
    try {
        const { data } = api.get("/comics")
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
import api from "../constants/connection";
import BaseURL from "./BaseUrl";

export const detalhaCartoon = async (id) => {
    try {
        const { data } = await api.get(`${BaseURL}/comics/${id}`)
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export const cartoonList = async () => {
    try {
        const { data } = await api.get("/comics")
        return data;
    } catch (error) {
        alert(`A API entrou no limite de requisições \n${error}`);
    }
};
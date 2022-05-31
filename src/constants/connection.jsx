import axios from "axios";
import hash from "../md5/md5Arq";
import PubKey from "./PubKey";
import time from "./Time";

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    params:{
        ts: time,
        apikey: PubKey,
        hash: hash
    }
})

export default api;
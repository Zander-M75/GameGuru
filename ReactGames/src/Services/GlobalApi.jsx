import axios from 'axios';


const key = "144731153b9d4578bcefad6272bfa90e";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+key)

export default {
    getGenreList
};



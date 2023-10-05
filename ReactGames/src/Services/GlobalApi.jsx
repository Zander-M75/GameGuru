import axios from 'axios';

const key = "144731153b9d4578bcefad6272bfa90e";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id);

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
};



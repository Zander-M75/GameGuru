import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'


function Home() {

  const [allGameList, setAllGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Action')

  useEffect(() => {
    getAllGamesList();
   getGameListByGenreId(4);
  }, [])

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
      
    })
  }

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Game list by genre id", resp.data.results)
      setGameListByGenre(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
        <div className='h-full hidden md:block'>
            <GenreList genreId={(genreId)=>getGameListByGenreId(genreId)}
            selectedGenreName={(name)=>setSelectedGenreName(name)}
            />
        </div>
        <div className='col-span-4 md:col-span-3'>
        { allGameList?.length > 0 && gameListByGenre.length>0 ?   
        <div>
        <Banner gameBanner={allGameList[0]} /> 
        <TrendingGames gameList={allGameList} />
        <GamesByGenreId gameList={gameListByGenre} selectedGenreName={selectedGenreName}/>
        </div>
        : null }
        </div>
    </div>
  )
}

export default Home  




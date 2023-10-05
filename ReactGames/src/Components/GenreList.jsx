import React, { useCallback, useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList() {

    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results)
        })
    }

  return (
    <div>GenreList</div>
  )
}

export default GenreList


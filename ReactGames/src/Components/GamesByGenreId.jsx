import React, { useEffect } from 'react'

function GamesByGenreId({gameList}) {
useEffect(() => {
    console.log(gameList)
}, [])

  return (
    <div>GamesByGenreId</div>
  )
}

export default GamesByGenreId
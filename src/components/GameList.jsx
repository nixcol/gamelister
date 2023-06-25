import React from 'react'
import Game from './Game'
import styled from 'styled-components'

const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  

  > div {
    flex: 1 0 25%; 
    margin: 1%;
    min-width: 300px;
  }

  @media (max-width: 600px) {
    > div {
      flex: 1 0 100%;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    > div {
      flex: 1 0 46%;
    }
  }
`

const GameList = ({ games }) => (
  <GameGrid>
    {games.map(game => (
      <Game key={game.id} game={game} />
    ))}
  </GameGrid>
)

export default GameList
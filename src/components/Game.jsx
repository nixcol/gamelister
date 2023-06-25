import React from 'react'
import styled from 'styled-components'

const GameCard = styled.div`
  background-color: #FCA311;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`

const GameImage = styled.img`
  width: 100%;
  height: auto;
`

const GameTitle = styled.h2`
  font-size: 1.5rem;
  color: #14213D;
`

const Game = ({ game }) => (
  <GameCard>
    <GameImage src={game.thumbnail} alt={game.title} />
    <GameTitle>{game.title}</GameTitle>
  </GameCard>
)

export default Game
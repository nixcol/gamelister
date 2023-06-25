import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GameList from './components/GameList'
import Loader from './components/Loader'
import SearchBar from './components/SearchBar'
import styled from 'styled-components'
import Header from './components/Header'


const GenreFilter = styled.select`
  width: 100%;
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-sizing: border-box;
`

const App = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/', { 
          timeout: 5000,
          headers: { 
            'Content-Type': 'application/json',
            'dev-email-address': 'nicolewemix@gmail.com' 
          } 
        })
        setGames(response.data)
      } catch (error) {
        if (error.code === 'ECONNABORTED') {
          alert('O servidor demorou para responder, tente mais tarde')
        } else if (error.response && [500, 502, 503, 504, 507, 508, 509].includes(error.response.status)) {
          alert('O servidor falhou em responder, tente recarregar a página')
        } else {
          alert('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  }

  const genres = ['All', ...new Set(games.map(game => game.genre))];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === 'All' || game.genre === genre)
  )

  return (
    <div>
      <Header />
      <SearchBar value={search} onChange={handleSearchChange} />
      <GenreFilter value={genre} onChange={handleGenreChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </GenreFilter>
      {loading ? <Loader /> : <GameList games={filteredGames} />}
    </div>
  )
}

export default App
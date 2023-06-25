import React from 'react'
import styled from 'styled-components'

const Bar = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SearchBar = ({ value, onChange }) => {
  return (
    <Bar
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search for a game...'
    />
  )
}

export default SearchBar
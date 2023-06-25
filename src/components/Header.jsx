import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  color: #FCA311;
  margin: 10px 0;
  justify-content: center;
  font-size: 2em; 
  height: 45px;

  .game-icon {
    width: 50px;
    height: 40px;
  }

`

const Header = () => (
  <StyledHeader>
    Gamelister 
    <img src="src\assets\game-icon.svg" alt="game-icon" className='game-icon'/>
  </StyledHeader>
)

export default Header

import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  color: #FCA311;
  margin: 10px 0;
  justify-content: center;
  font-size: 2em; 
  height: 45px;

  .logo {
    margin-left: 10px; 
  }


`

const Header = () => (
  <StyledHeader>
    Gamelister 
    <img src="https://www.svgrepo.com/show/6277/play-station-controller.svg"alt="logo" className='logo'/>
  </StyledHeader>
)

export default Header

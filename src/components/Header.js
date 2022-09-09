import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import styled from 'styled-components';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <StyledHeader>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <StyledHeaderList>
            <StyledHeaderItem>
              <StyledHeaderLink href='/'>My Products</StyledHeaderLink>
            </StyledHeaderItem>
            <StyledHeaderItem>
              <StyledHeaderLink href='/'>My Sales</StyledHeaderLink>
            </StyledHeaderItem>
            <StyledHeaderItem>
              <StyledHeaderButton onClick={logoutHandler}>Logout</StyledHeaderButton>
            </StyledHeaderItem>
          </StyledHeaderList>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  padding: 0 10%;
`

const StyledHeaderList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`

const StyledHeaderItem = styled.li`
  margin: 0 1rem;
`

const StyledHeaderLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.25rem;

  :hover, :active {
    color: #b864da;
  }
`

const StyledHeaderButton = styled.button`
  font-size: 1.25rem;
  background-color: #ffbb00;
  border: 1px solid #ffbb00;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: #2c2922;

  :hover, :active {
    background-color: #ffa600;
    border-color: #ffa600;
  }
`

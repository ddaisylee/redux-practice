import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import styled from 'styled-components';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <StyledMain>
      <section>
        <form onSubmit={loginHandler}>
          <StyledControl>
            <StyledLabel htmlFor='email'>Email</StyledLabel>
            <StyledInput type='email' id='email' />
          </StyledControl>
          <StyledControl>
            <StyledLabel htmlFor='password'>Password</StyledLabel>
            <StyledInput type='password' id='password' />
          </StyledControl>
          <button>Login</button>
        </form>
      </section>
    </StyledMain>
  );
};

export default Auth;

const StyledMain = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`

const StyledControl = styled.div`
  margin-bottom: 0.5rem;
`

const StyledLabel = styled.label`
  display: block;
  color: #616161;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

const StyledInput = styled.input`
  display: block;
  width: 20rem;
  margin: auto;
  border-radius: 4px;
  padding: 0.25rem;
  border: 1px solid #ccc;
`

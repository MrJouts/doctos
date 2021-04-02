import styled from 'styled-components';

const Title = styled.h1`
`;

const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginLabel = styled.label`
    padding-top: 1vh;
    color: #999;
`;

const LoginInput = styled.input`
    padding: 1vh;
    border: 0 none;
    border-bottom: 1px solid #999;
    outline: none;
    text-align: center;
    color: #333;
    margin-bottom: 2vh;
`;

const Button = styled.button`
    padding: 1vh;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    color: #7a7;
    text-transform: uppercase;
    font-weight: 900;
    transition: .25s ease-in all;
    &:hover{
      cursor: pointer;
      background: #7a7;
      color: #fafafa;
    }
`;

export default function Login() {
    return (
        <div className="App">
            <LoginSection>
                <Title>Login</Title>
                <LoginForm action="">
                    <LoginGroup>
                        <LoginLabel>Usuario</LoginLabel>
                        <LoginInput type="text" />
                    </LoginGroup>
                    <LoginGroup>
                        <LoginLabel>Contraseña</LoginLabel>
                        <LoginInput type="password" />
                    </LoginGroup>
                    <Button type="submit" value="Ingresar">Ingresar</Button>
                </LoginForm>
            </LoginSection>
        </div>
    );
}
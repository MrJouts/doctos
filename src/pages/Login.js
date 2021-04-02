import styled from 'styled-components';

const Title = styled.h1`
`;

const Paragraph = styled.p`
  padding: 1em;
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
  margin-top: 2.5vh;
  padding: 2.5vh 0;
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 50vw
`;

const LoginGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const LoginLabel = styled.label`
    padding-top: 1vh;
    color: rgba(0,0,0,0.5);
    font-size: .9em;
`;

const LoginInput = styled.input`
    padding: 1vh;
    border: 0 none;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    outline: none;
    text-align: center;
    color: #333;
    margin-bottom: 2vh;
    width: 50%;
`;

const Button = styled.button`
  padding: 1vh 1vw;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
  color: #7a7;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 900;
  transition: .25s ease-in all;
  background: #fafafa;
  &:hover{
    cursor: pointer;
    background: #7a7;
    color: #fafafa;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
`;

export default function Login() {
    return (
        <div className="App">
            <LoginSection>
                <Title>Bienvenido a Doctos</Title>
                <Paragraph>Ingrese su usuario y contraseña, por favor:</Paragraph>
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
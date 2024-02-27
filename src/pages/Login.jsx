import styled from "styled-components";

const FullPageLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url("FundoSite.png");
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 350px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
`

const Label = styled.label`
    width: 90%;
    text-align: left;
    font-weight: bold;
    `
const Input = styled.input`
    width: 90%;
    height: 40px;
    border: 0;
    background-color: #EEEEEE;
    padding-left: 0.3rem;
    padding-top: 0.3rem;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 14px;

  `

const Button = styled.button`
    width: 90%;
    height: 40px;
    background-color: #0F6935;
    color: #ffffff;
    border: 0px;
    border-radius: 2px;
    margin-bottom: 1rem;
    cursor: pointer;
`

const A = styled.a`
    color: #858585;
    text-align:left;
    width: 90%;
`
const ImageFooter = styled.img`
    width: 250px;
    opacity: 0.5;
    position: absolute;
    bottom: 3rem;
    right: 3rem;

`
const Login = () => {
    return (
        <div >
            <FullPageLogin >
                <img src="/logo.png" alt="" loading="lazy"/>
                <FormContainer >
                    <h2>Bem vindo de volta!</h2> <br />
                    <Label >
                        Nome de Usuário
                    </Label>
                    <Input

                        type="text"
                        id="username"
                        name="username"
                        placeholder="Digite seu nome de usuário"
                    />
                    <Label >
                        Senha
                    </Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"

                    />
                    <Button type="submit">
                        Entrar
                    </Button>
                    <A href="http://">Esqueceu a senha?</A>
                </FormContainer>
                <ImageFooter src="logoTransparente.png" alt="" />
            </FullPageLogin>

        </div>

    );
};

export default Login;
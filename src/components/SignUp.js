import styled from "styled-components";
import { Button, Input } from "../styles";
import { Link } from "react-router-dom";

export default function SignUp() {

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <div>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Senha"
                    required
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Confirme a senha"
                    required
                />
                <Button>Cadastrar</Button>
            </div>
            <Link to="/sign-in">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    padding: 105px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
    }

    p {
        font-size: 15px;
        font-weight: 700;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin-bottom: 13px;
    }
`;
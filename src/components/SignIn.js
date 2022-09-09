import styled from "styled-components";
import { Button, Input } from "../styles";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <div>
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
                <Button>Entrar</Button>
            </div>
            <Link to="/sign-up">
                <p>Primeira vez? Cadastre-se</p>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    padding: 176px 0;
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
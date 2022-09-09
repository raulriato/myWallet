import styled from "styled-components";
import { Button, Input } from "../styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();

    const [signUp, setsignUp] = useState({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });

    const [disabled, setDisabled] = useState(false);

    function handleInput(e) {
        setsignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <form>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={handleInput}
                    value={signUp.name}
                    disabled={disabled}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInput}
                    value={signUp.email}
                    disabled={disabled}
                    required
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Senha"
                    onChange={handleInput}
                    value={signUp.password}
                    disabled={disabled}
                    required
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Confirme a senha"
                    onChange={handleInput}
                    value={signUp.confirmedPassword}
                    disabled={disabled}
                    required
                />
                <Button>Cadastrar</Button>
            </form>
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

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        margin-bottom: 13px;
    }
`;
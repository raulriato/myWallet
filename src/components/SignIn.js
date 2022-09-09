import styled from "styled-components";
import { Button, Input } from "../styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../services/myWallet";

export default function SignIn() {
    const navigate = useNavigate();

    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    });

    const [disabled, setDisabled] = useState(false);

    function handleInput(e) {
        setSignIn({
            ...signIn,
            [e.target.name]: e.target.value
        })
    }

    function handleForm(e) {
        e.preventDefault();
        setDisabled(!disabled);
        postSignIn(signIn).then(response => {
            localStorage.setItem('mywallet', JSON.stringify({
                headers: {
                    Authorization: `Bearer ${response.data.token}`
                }
            }));

            navigate('/');
        })

        .catch(response => {
            switch(response.response.status){
                case 401:
                    alert('Dados inválidos');
                    setDisabled(false);
                    break;
                
                case 422:
                    alert('Usuário não encontrado');
                    setDisabled(false);
                    break;
                
                default:
                    alert('Dados inválidos');
                    setDisabled(false);
            }
        })
    }

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <form onSubmit={handleForm}>
                <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInput}
                    value={signIn.email}
                    disabled={disabled}
                    required
                />
                <Input
                    type="text"
                    name="password"
                    placeholder="Senha"
                    onChange={handleInput}
                    value={signIn.password}
                    disabled={disabled}
                    required
                />
                <Button>Entrar</Button>
            </form>
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
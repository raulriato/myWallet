import styled from "styled-components";
import { Button, Input } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocal } from "../../hooks";
import { postNewTransaction } from "../../services/myWallet";
import dayjs from "dayjs";

export default function NewTransaction({ moneyIn }) {
    const navigate = useNavigate();
    const { token } = useLocal();

    const [transaction, setTransaction] = useState({
        value: "",
        description: ""
    });
    const [disabled, setDisabled] = useState(false);

    function handleInput(e) {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        })
    };

    function handleForm(e) {
        e.preventDefault();
        setDisabled(!disabled)

        if (moneyIn) {
            const body = {
                ...transaction,
                value: Number(transaction.value),
                date: dayjs().format("DD/MM")
            };
            postNewTransaction(body, token)
                .then(() => navigate("/"))
                .catch(() => {
                    alert("Algo deu errado! Tente novamente");
                    setDisabled(false);
                    return;
                });
        };

        const body = {
            ...transaction,
            value: Number(transaction.value) * -1,
            date: dayjs().format("DD/MM")
        };

        postNewTransaction(body, token)
            .then(() => navigate("/"))
            .catch(() => {
                alert("Algo deu errado! Tente novamente");
                setDisabled(false);
                return;
            });
    }

    return (
        moneyIn ?
            <Wrapper onSubmit={handleForm}>
                <h1>Nova Entrada</h1>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    onChange={handleInput}
                    value={transaction.value}
                    disabled={disabled}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    onChange={handleInput}
                    value={transaction.description}
                    disabled={disabled}
                    required
                />
                <Button>Salvar entrada</Button>
            </Wrapper>
            :
            <Wrapper onSubmit={handleForm}>
                <h1>Nova Saída</h1>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    onChange={handleInput}
                    value={transaction.value}
                    disabled={disabled}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    onChange={handleInput}
                    value={transaction.description}
                    disabled={disabled}
                    required
                />
                <Button>Salvar Saída</Button>
            </Wrapper>
    )
}

const Wrapper = styled.form`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        width: 87%;
        text-align: start;
        font-size: 26px;
        font-weight: 700;
        margin: 40px 0 80px
    }

    input {
        margin-bottom: 13px;
    }
`;
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getTransactions } from "../services/myWallet";
import { useLocal } from "../hooks";
import { useNavigate } from "react-router-dom";
import Transaction from "./Transaction";

export default function Transactions() {
    const { token } = useLocal();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState([]);
    const [noTransactions, setNoTransactions] = useState("");

    useEffect(() => {
        getTransactions(token)
            .then(res => {
                setTransactions(res.data);
                setNoTransactions("Não há registros de entrada ou saída");
            })
            .catch(res => {
                localStorage.removeItem("mywallet");

                navigate("/sign-in");
            })
    }, []);
    return (
        <Wrapper>
            {transactions.length === 0 ?
                <Notransactions>{noTransactions}</Notransactions>
                :
                transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        date={transaction.date}
                        value={transaction.value}
                        description={transaction.description}
                    />
                ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 87%;
    height: 70%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    padding: 23px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Notransactions = styled.p`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:rgba(134, 134, 134, 1);
`;
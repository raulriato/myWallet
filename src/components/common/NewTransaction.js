import styled from "styled-components";
import { Button, Input } from "../../styles";

export default function NewTransaction({ moneyIn }) {
    return (
        moneyIn ?
            <Wrapper>
                <h1>Nova Entrada</h1>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="value"
                    required
                />
                <Button>Salvar entrada</Button>
            </Wrapper>
            :
            <Wrapper>
                <h1>Nova Saída</h1>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="value"
                    required
                />
                <Button>Salvar Saída</Button>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 20px;
    padding-left: 25px;
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
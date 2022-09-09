import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io';
import { Button } from '../styles';

export default function Home() {
    return (
        <Wrapper>
            <Header>
                <span>Olá, Fulano</span>
                <RiLogoutBoxRLine />
            </Header>
            <Transactions />
            <Footer>
                <Button square>
                    <IoIosAddCircleOutline />
                    <span>Nova entrada</span>
                </Button>
                <Button square>
                    <IoMdRemoveCircleOutline />
                    <span>Nova saída</span>
                </Button>
            </Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
`;

const Header = styled.div`
    width: 87%;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
`;

const Footer = styled.div`
    width: 87%;
    display: flex;
    justify-content: space-between;
`;

const Transactions = styled.div`
    width: 87%;
    height: 446px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
`;
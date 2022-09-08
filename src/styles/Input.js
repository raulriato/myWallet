import styled from "styled-components";

export const Input = styled.input`
    width: 87%;
    height: 58px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    padding-left: 15px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    color: rgba(0, 0, 0, 1);
    border: none;

    &::placeholder {
        color: rgba(0, 0, 0, 1);
    }

    &:focus {
        outline: 0;
    }

    ${({ disabled }) => disabled ? `
        background-color: rgba(242, 242, 242, 1);
        &::placeholder {
            color: rgba(175, 175, 175, 1);
        }
    ` : ''}
`;
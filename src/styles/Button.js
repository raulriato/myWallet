import styled from "styled-components";

export const Button = styled.button`
    width: 87%;
    height: 58px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(163, 40, 214, 1);
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${
        ({ square }) => square ? `
            width: 156px;
            height: 114px;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            padding: 9.5px 12px;
            font-size: 22px;

            span {
                font-size: 17px;
            }
        `: ""
    }

    ${
        ({ disabled }) => disabled ? `
            opacity: 0.7;
            cursor: initial;
    ` : ''}
`;
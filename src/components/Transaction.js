import styled from "styled-components";

export default function Transaction({ date, value, description }) {
    return (
        <Wrapper>
            <div>
                <span>{date}</span>
                <p>{description}</p>
            </div>
            <Value value={value} >{value}</Value>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    padding: 0 11px;
    margin-bottom: 20px;

    span {
        color: rgba(198, 198, 198, 1);
        margin-right: 8px;
    }

    p {
        color: rgba(0, 0, 0, 1);
    }

    div {
        display: flex;
    }
`;

const Value = styled.div`
    color: ${({ value }) => value < 0 ? "rgba(199, 0, 0, 1)" : "rgba(3, 172, 0, 1)"};
`;
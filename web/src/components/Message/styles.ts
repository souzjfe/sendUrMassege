import styled, { css } from 'styled-components';

interface MsgProps {
    my: boolean;
}

export const BodyMessage = styled.div<MsgProps>`

    width: fit-content;
    background: #cdceec;
    margin: 10px;
    padding: 5px 20px 10px;
    border-radius: 0px 10px 10px 40px;
    ${props =>
        props.my && css`
        align-self: flex-end;
        border-radius: 10px 0px 40px 10px;
    `};
`;
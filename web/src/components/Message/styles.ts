import styled, { css } from 'styled-components';

interface MsgProps {
    isMyMsg: boolean;
}

export const BodyMessage = styled.div<MsgProps>`

    width: fit-content;
    background: #cdceec;
    margin: 10px;
    padding: 5px 20px 10px;
    border-radius: 0px 10px 10px 40px;

    
    i{
        font-size: 10px;
        margin-bottom: 0;
        color: #a4a6d1;
    }
    .hour {
        font-size: 8px;
        margin-bottom: 0;
        color: #a4a6d1;
    }
    ${props =>
        props.isMyMsg && css`
        align-self: flex-end;
        border-radius: 10px 0px 40px 10px;
    `};
`;
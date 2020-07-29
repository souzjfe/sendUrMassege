import React from "react";
import { BodyMessage } from "./styles";
interface MsgProps {
    msg: {

        texto: string;
        userName: string;
        // hour: number;
        // id: number;
        // userName: string;
        // texto: string;
    }
    name: string;
}

const Msg: React.FC<MsgProps> = ({ msg, name }) => {
    return (
        <BodyMessage
            my = {msg.userName == name ? true : false}
        >
            <i>{msg.userName}</i>
            <p>{msg.texto}</p>
        </BodyMessage>
    );

}
export default Msg;
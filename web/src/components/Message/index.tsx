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
    function thisMsgIsFrom (userName: string) {
        if (userName == name)
            return true;
        return false;
    }
    return (
        <BodyMessage
            isMyMsg = {thisMsgIsFrom(msg.userName) ? true : false}
        >
            
            <i>{thisMsgIsFrom(msg.userName) ? "" : msg.userName }</i>
            <p>{msg.texto}</p>
        </BodyMessage>
    );

}
export default Msg;
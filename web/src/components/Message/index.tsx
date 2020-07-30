import React from "react";
import { BodyMessage } from "./styles";
interface MsgProps {
    msg: {

        text: string;
        userName: string;
        hour: string;
        data: string;

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
            <p>{msg.text}</p>
            <i>{msg.hour}</i>
        </BodyMessage>
    );

}
export default Msg;
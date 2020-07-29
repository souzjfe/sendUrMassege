import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './style.css';
import api from '../../services/api';
import Message from '../../components/Message'
interface Msg {
    id: number;
    texto: string;
    userName: string;
    // ano: number;
    // mes: number;
    // dia:number;
    // hora:number;
    // minuto:number;
}
interface Props {
    match: {
        params: {
            name: string;
        }
    }
}

const Chat = (props: Props) => {

    const userName = props.match.params.name;
    const [msgs, setMsgs] = useState<Msg[]>([]);
    const [newMsg, setNewMsg] = useState({
        texto: '',
        userName: userName,

    });
    const [control, setControl] = useState(0);

    useEffect(() => {
        api
            .get('msg')
            .then(response => {
                setMsgs(response.data);
            });

    }, [control])

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setNewMsg({ ...newMsg, [name]: value })
    }
    async function handleSubmit() {
        await api.post('msg', newMsg);
        setControl(control + 1);
    }


    return (
        <div>
            <div className="chatPage">
                <ul className="chatBox">

                    {msgs.map(msg => (
                        <Message 
                        key={msg.id}
                        msg={msg}
                        name={userName}
                        />
                    ))}
                </ul>
                <ul>

                    <input
                        type="text"
                        name="texto"
                        id="enviarMsg"
                        placeholder="Escreva sua mensagem"
                        onChange={handleInputChange}
                    />
                    
                    <button type="submit" onClick={handleSubmit}>Enviar</button>
                </ul>
            </div>
        </div>
    );

}

export default Chat;
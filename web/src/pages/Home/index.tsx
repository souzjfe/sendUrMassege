import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';


const Home = () => {



    const [userName, setUserName] = useState({
        name: '',
    });
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUserName({ ...userName, [name]: value })
    }
    async function handleSubmit() {
        
        await api.post('usr', userName);
    }

    return (
        <div className="homePage">
            <form >
                <div className="login">
                    <input
                        type="text"
                        className="form"
                        placeholder="Digite seu nome aqui"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                    />
                    <Link to={`/chat/${userName.name}`}>
                        <button type="submit" onClick={handleSubmit} className="btn btn-link">
                            <FiLogIn />
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );

}

export default Home;
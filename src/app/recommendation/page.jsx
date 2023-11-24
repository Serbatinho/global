"use client";
import { useState, useEffect } from 'react';
import styles from '../../styles/layout/app/recommendation/recommendation.module.scss';

export default function Recommendation() {
    const [loggedUser, setLoggedUser] = useState(null);
    const [recom, setRecom] = useState();
    const [selectedId, setSelectedId] = useState(null);
    const [recomendacao, setRecomendacao] = useState('0');
    const [resultado, setResultado] = useState('0');

    const enviar = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            setLoggedUser(null);
        } else {
            setLoggedUser(JSON.parse(sessionStorage.getItem('user')));
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            const recomresponse = await fetch('http://localhost:3000/api/recommendation/getrecom');
            const recomp = await recomresponse.json();
            setRecom(recomp);
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchSendData() {
            const userResponse = await fetch('http://localhost:3000/api/recommendation/sendrecom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(send)
            });
        }

        fetchSendData();
    }, [enviar]);

    useEffect(() => {
        console.log(recom)
    }, [recom])

    const handleChange = (event) => {
        setSelectedId(event.target.value);
    };


    let send = {
        "recomendacao": recomendacao,
        "resultado": {
            "id": resultado
        }
    }

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case 'RecomOptionSelect':
                setSelectedId(event.target.value);
                setResultado(event.target.value);
                break;
            case 'recomendacao':
                setRecomendacao(event.target.value);
                break;

        }
    };

    return (
        <main className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <h1>RECOMENDAÇÕES</h1>
                    <button >Exibir loggedUser</button>
                    {recom && (
                        <div>
                            <select onChange={handleInputChange} id="RecomOptionSelect" name="RecomOptionSelect">
                                {recom.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.id}
                                    </option>
                                ))}
                            </select>

                            {selectedId && (
                                <div>
                                    {Object.entries(recom.find(item => String(item.id) === selectedId)).map(([key, value]) => (
                                        <p key={key}>{`${key}: ${value}`}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <form>
                        <div>
                            <label htmlFor="texto">Texto:</label>
                            <textarea
                                id="texto"
                                name="recomendacao"
                                value={recomendacao}
                                maxLength={199}
                                rows={4}
                                cols={50}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" onClick={enviar} >Enviar</button>
                    </form>

                </div>
            </div>
        </main>
    );
}
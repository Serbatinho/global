"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../../styles/layout/app/myexams/myexams.module.scss';

export default function MyExams() {
    const [loggedUser, setLoggedUser] = useState(null);
    const [getdados, setGetdados] = useState([]);
    const [exameUser, setExameUser] = useState();
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            router.push('/')
        }
    }, [router]);


    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            setLoggedUser(null);
        } else {
            setLoggedUser(JSON.parse(sessionStorage.getItem('user')));
        }
    }, []);


    useEffect(() => {
        async function fetchData() {
            const dadosresponse = await fetch('http://localhost:3000/api/myexams');
            const dados = await dadosresponse.json();
            setGetdados(dados);

        }

        fetchData();
    }, [])

    useEffect(() => {
        sessionStorage.setItem('dadosexame', JSON.stringify(getdados));
        if (sessionStorage.getItem('user') !== null) {
            setExameUser(getdados.filter(objeto => objeto.ID_PACIENTE === loggedUser.id));
            console.log(exameUser)
        }
    }, [getdados]);


    const handleButtonClick = () => {
        console.log(loggedUser);
    };

    return (
        <>

            {loggedUser ? (

                <main className={`${styles['full-content-container']}`}>
                    <div className={`${styles['mid-content-container']}`}>
                        <div className={`${styles['content-container']}`}>
                            <h1>MEUS EXAMES</h1>
                            <button onClick={handleButtonClick}>Exibir loggedUser</button>

                            <form>

                            </form>
                        </div>
                    </div>
                </main>
            ) : (
                <main className={`${styles['full-content-container']}`}>
                    <div className={`${styles['mid-content-container']}`}>
                        <div className={`${styles['content-container']}`}>
                            <h1>RETORNANDO AO MENU</h1>
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}
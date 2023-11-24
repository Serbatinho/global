"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../../styles/layout/app/myexams/myexams.module.scss';


export default function MyExams() {
    const [loggedUser, setLoggedUser] = useState(null);
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
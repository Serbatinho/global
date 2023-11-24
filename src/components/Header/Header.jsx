"use client";

import Link from 'next/link';

import styles from '../../styles/layout/components/Header/header.module.scss'
import Logo from '../Logo/Logo'
import { useEffect, useState } from 'react';


export default function Header() {

    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            setLoggedUser(null);
        } else {
            setLoggedUser(JSON.parse(sessionStorage.getItem('user')));
        }
    }, []);

    const loggout = () => {
        sessionStorage.removeItem('user');
        window.location.reload();
    };

    return (
        <header className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <div>
                        < Logo fatherStyle={`${styles['logo-container']}`} />
                    </div>

                    <div className={`${styles['header-linktree']}`}>
                        <ul>
                            {loggedUser ? (
                                <li onClick={loggout}>
                                    LOGOUT
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login">
                                        FAÇA LOGIN
                                    </Link>
                                </li>
                            )}
                            {loggedUser ? (

                                <li>
                                    <Link href="/myexams">
                                        MEUS EXAMES
                                    </Link>
                                </li>
                            ) : (
                                ''
                            )}
                            <li>
                                <Link href="/newexam">
                                    CADASTRAR EXAME
                                </Link>
                            </li>
                            <li>
                                <Link href="/recommendation">
                                    RECOMENDAÇÕES EXAMES
                                    {/* Adicionar recomendação ao exame */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
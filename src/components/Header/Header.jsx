import Link from 'next/link';

import styles from '../../styles/layout/components/Header/header.module.scss'
import Logo from '../Logo/Logo'


export default function Header() {
    return (
        <header className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <div>
                        < Logo fatherStyle={`${styles['logo-container']}`} />
                    </div>

                    <div className={`${styles['header-linktree']}`}>
                        <ul>
                            <li>
                                <Link href="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li>
                                <Link href="/register">
                                    CADASTRO
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    EXAME
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
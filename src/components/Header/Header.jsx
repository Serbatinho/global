import styles from '../../styles/layout/components/Header/header.module.scss'
import Logo from '../Logo/Logo'


export default function Header() {
    return (
        <header className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <div>
                        < Logo />
                    </div>

                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Cadastre-se</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
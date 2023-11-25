import styles from '../styles/layout/app/404/404.module.scss';

export default function Notfound() {
    return (


        <main className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <h1>OOPS! 404! - Página não encontrada!</h1>
                </div>
            </div>
        </main>

    )
}
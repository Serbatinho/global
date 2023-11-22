import styles from '../../styles/layout/components/Footer/footer.module.scss'
import Logo from '../Logo/Logo'


export default function Footer() {
    return (
        <footer className={`${styles['full-content-container']}`} >
            <div className={`${styles['mid-content-container']}`} >
                <div className={`${styles['content-container']}`} >

                    < Logo />

                    <dl>
                        <div>
                            <dt>Lucas Serbato de Barros</dt>
                            <dd>RM: 551821-1TDSS</dd>
                            <dd>Cargo: Web Developer</dd>
                        </div>

                        <div>
                            <dt>Gustavo Carvalho Noia</dt>
                            <dd>RM: 552466-1TDSS</dd>
                            <dd>Cargo: JavaScript Developer</dd>
                        </div>

                        <div>
                            <dt>Ronald de Oliveira</dt>
                            <dd>RM: 552364-1TDSS</dd>
                            <dd>Cargo: Python Developer</dd>
                        </div>

                        <div>
                            <dt>Vitor Teixeira</dt>
                            <dd>RM: 552579-1TDSPV</dd>
                            <dd>Cargo: AI Developer</dd>
                        </div>

                        <div>
                            <dt>Nicolly de Almeida</dt>
                            <dd>RM: 552228-1TDSS</dd>
                            <dd>Cargo: DB Developer</dd>
                        </div>
                    </dl>

                    <p>Todo o conteúdo exibido neste site é de livre acesso. Copie à vontade.</p>

                </div>
            </div>
        </footer>
    )
}
import Link from 'next/link';
import styles from '../../styles/layout/components/Logo/logo.module.scss';

function Logo({ fontSize, fatherStyle }) {
    return (
        <div className={`${styles['logo-container']} ${fatherStyle}`}>
            <Link href="/">
                <h1 className={`${styles['logo']}`} style={{ fontSize: fontSize }}>EQUIPE</h1>
            </Link>
        </div>
    );
}

export default Logo;

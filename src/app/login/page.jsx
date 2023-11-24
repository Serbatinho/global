"use client";
import { useEffect, useState } from 'react';
import styles from '../../styles/layout/app/login/login.module.scss';
import { useRouter } from 'next/navigation';

export default function Newexam() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem('user') !== null) {
            router.push('/')
        }
    }, [router]);

    const enviarLogin = async (event) => {
        event.preventDefault();

        router.push('/home')

        let obj = { "email": email, "password": password }
        try {
            const userResponse = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            if (!userResponse.ok) {
                throw new Error(`HTTP error! status: ${userResponse.status}`);
            }
            const user = await userResponse.json();
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.reload();

            // console.log(user)
            // TODO Armazenar em session storage o objeto recebido, tirar um meu console.log
            // TODO pensar na ação a ser realizada após isso, navigate e etc
            alert("Login realizado com sucesso!");
        } catch (error) {
            console.error('Fetch failed:', error);
            alert("Falha no login!");
        }


    };


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <main className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <h1>Login</h1>

                    <form onSubmit={enviarLogin}>
                        <label htmlFor="login">Login:</label>
                        <input type="text" id="login" name="login" value={email} onChange={handleEmailChange} required />

                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" value={password} onChange={handlePasswordChange} required />

                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}


// export default async function Login() {
//     let email = 'silvaa_joao@gmail.com'
//     let password = 'js556677'
//     let auth = btoa(`${email}:${password}`)
//     let response = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
//         headers: {
//             'Authorization': `Basic ${auth}`
//         }
//     })
//     let data = await response.json()
//     console.log(data)

//     return (
//         <div>
//             <h1>Login</h1>
//             <input type="text" placeholder="Username" />
//             <input type="password" placeholder="Password" />
//             <button>Login</button>
//         </div>
//     );
// }

/////////////////////



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

"use client";
import { useState } from 'react';
import styles from '../../styles/layout/app/login/login.module.scss';

export default function Newexam() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const enviarLogin = async (event) => {
        event.preventDefault();
        let obj = {"email": email, "password": password}
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
            console.log(user)
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

////////////////////////

// "use client";
// import { useState, useEffect } from 'react';
// import styles from '../../styles/layout/app/login/login.module.scss'

// export default function Newexam() {
//     const [user, setUser] = useState(null);
//     const [login, setLogin] = useState("");
//     const [senha, setSenha] = useState("");

//     useEffect(() => {
//         async function fetchData() {
//             const email = "your email here";
//             const password = "your password here";
//             let auth = Buffer.from(`${email}:${password}`).toString('base64');
//             try {
//                 const userResponse = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
//                     headers: {
//                         'Authorization': `Basic ${auth}`,
//                         'Access-Control-Allow-Origin': 'http://localhost:3000' // Adicione esta linha
//                     }
//                 });
//                 if (!userResponse.ok) {
//                     throw new Error(`HTTP error! status: ${userResponse.status}`);
//                 }
//                 const user = await userResponse.json();
//                 setUser(user);
//             } catch (error) {
//                 console.error('Fetch failed:', error);
//             }
//         }

//         fetchData();
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(`Login: ${login}, Senha: ${senha}`);
//         let auth = Buffer.from(`${login}:${senha}`).toString('base64');
//         try {
//             const userResponse = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
//                 headers: {
//                     'Authorization': `Basic ${auth}`,
//                     'Access-Control-Allow-Origin': 'http://localhost:8080' // Adicione esta linha
//                 }
//             });
//             if (!userResponse.ok) {
//                 throw new Error(`HTTP error! status: ${userResponse.status}`);
//             }
//             const user = await userResponse.json();
//             setUser(user);
//             alert("Login realizado com sucesso!");
//         } catch (error) {
//             console.error('Fetch failed:', error);
//             alert("Falha no login!");
//         }
//     }

//     return (
//         <main className={`${styles['full-content-container']}`}>
//             <div className={`${styles['mid-content-container']}`}>
//                 <div className={`${styles['content-container']}`}>
//                     <h1>Login</h1>

//                     <form onSubmit={handleSubmit}>
//                         <label for="login">Login:</label>
//                         <input type="text" id="login" name="login" required onChange={e => setLogin(e.target.value)} />

//                         <label for="senha">Senha:</label>
//                         <input type="password" id="senha" name="senha" required onChange={e => setSenha(e.target.value)} />

//                         <button type="submit">Entrar</button>

//                     </form>

//                 </div>
//             </div>
//         </main>
//     )
// }
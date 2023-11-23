"use client";

import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const loginResponse = await fetch('/api/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                });

                if (loginResponse.ok) {
                    window.location.href = '/login';
                } else {
                    if (loginResponse.headers.get('content-type').includes('application/json')) {
                        const data = await loginResponse.json();
                        alert(data.message);
                    } else {
                        alert('Erro ao fazer login após o cadastro');
                    }
                }
            } else {
                if (response.headers.get('content-type').includes('application/json')) {
                    const data = await response.json();
                    alert(data.message);
                } else {
                    alert('Erro ao cadastrar usuário');
                }
            }
        } catch (error) {
            console.error('Erro durante a requisição:', error);
            alert('Erro ao realizar o cadastro');
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Cadastrar</button>
        </div>
    );
}

import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json();
    
    let auth = Buffer.from(`${email}:${password}`).toString('base64');

    try {
        const response = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        const user = await response.json();
        if (!user) {
            return NextResponse.json({ error: 'Usuário não encontrado' });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao buscar usuário' });
    }
}
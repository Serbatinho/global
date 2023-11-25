import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        const obj = req.body;

        const sendexamresponse = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        const user = await sendexamresponse.json();
        if (!user) {
            return new NextResponse().json({ error: 'Usuário não encontrado' });
        }

        return new NextResponse().json(user);
    } catch (error) {
        console.error(error);
        return new NextResponse().json({ error: 'Erro ao buscar usuário' });
    }
}
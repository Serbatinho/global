import { NextResponse } from "next/server";

export async function POST(req) {
    // let send = {
    //     "recomendacao": "asdsad",
    //     "resultado": {
    //         "id": 1
    //     }
    // }

    const send = await req.json();

    try {
        const recomResponse = await fetch('http://localhost:8080/GSApi/api/recomendacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(send)
        });
        return NextResponse.json({ 200: 'Recomendação enviada com sucesso' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Erro ao enviar recomendação' });
    }
}

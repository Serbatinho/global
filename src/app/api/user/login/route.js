import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req) {
    console.log('vi mama nois')
    // const { email, password } = await request.json();

    // // const { email, password } = req.json();

    // // let email = 'silvaa_joao@gmail.com';
    // // let password = 'js556677';

    // let auth = Buffer.from(`${email}:${password}`).toString('base64');

    // try {
    //     const response = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
    //         headers: {
    //             'Authorization': `Basic ${auth}`
    //         }
    //     });

    //     const user = await response.json();

    //     if (!user) {
    //         return NextResponse.json({ error: 'Usuário não encontrado' });
    //     }

    //     return NextResponse.json(user);
    // } catch (error) {
    //     console.error(error);
    //     return NextResponse.json({ error: 'Erro ao buscar usuário' });
    // }
}
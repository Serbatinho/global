import { NextResponse } from "next/server";

export async function GET() {
    try {
        const recomresponse = await fetch("http://localhost:8080/GSApi/api/resultado");

        const tipoexame = await recomresponse.json();
        if (!tipoexame || tipoexame.length === 0) {
            return NextResponse.json([{ zid: 0, nome: 'sem opções válidas' }]);
        }
        return NextResponse.json(tipoexame);
    } catch (error) {
        console.error(error);
        return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
    }
}
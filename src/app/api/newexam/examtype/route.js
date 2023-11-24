import { NextResponse } from "next/server";

export async function GET() {
    try {
        const examResponse = await fetch("http://localhost:8080/GSApi/api/tipoExame");

        const tipoexame = await examResponse.json();
        if (!tipoexame || tipoexame.length === 0) {
            return NextResponse.json([{ zid: 0, nome: 'sem opções válidas' }]);
        }
        return NextResponse.json(tipoexame);
    } catch (error) {
        console.error(error);
        return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
    }
}
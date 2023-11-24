import { NextResponse } from "next/server";

export async function GET() {
    try {
        const recomresponse = await fetch("http://localhost:8080/GSApi/api/resultados");

        const recomend = await recomresponse.json();
        if (!recomend || recomend.length === 0) {
            return NextResponse.json([{ zid: 0, nome: 'sem opções válidas' }]);
        }
        return NextResponse.json(recomend);
    } catch (error) {
        console.error(error);
        return NextResponse.json([{ id: 1, nome: 'Sem opções válidas' }]);
    }
}
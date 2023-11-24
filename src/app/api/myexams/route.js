import { NextResponse } from "next/server";

export async function GET() {
    try {
        const dadosresponse = await fetch("http://127.0.0.1:8000/pesqIdResultado");
        const dadospaciente = await dadosresponse.json();
        if (!dadospaciente || dadospaciente.length === 0) {
            return NextResponse.json([{ zid: 2, nome: 'sem opções válidas' }]);
        }
        // console.log('vi mama nois')
        return NextResponse.json(dadospaciente);
    } catch (error) {
        console.error(error);
        return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
    }
}
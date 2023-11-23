import { NextResponse } from "next/server";

export async function GETExamOptions() {
    try {
        const examResponse = await fetch("http://localhost:8080/GSApi/api/tipoExame");
        console.log(examResponse);
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

export async function GETLabOptions() {
    try {
        const response = await fetch("http://localhost:8080/GSApi/api/laboratorio");
        const laboptions = await response.json();
        if (!laboptions || laboptions.length === 0) {
            return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
        }
        return NextResponse.json(laboptions);
    } catch (error) {
        console.error(error);
        return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
    }
}

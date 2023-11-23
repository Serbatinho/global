import { NextResponse } from "next/server";

export async function GETExamOptions() {
    try {
        const response = await fetch("http://localhost:8080/GSApi/api/laboptions");
        const tipoexame = await response.json();
        if (!tipoexame || tipoexame.length === 0) {
            return NextResponse.json([{ id: 0, nome: 'sem opções válidas' }]);
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

"use client";
import { useState } from 'react';
import styles from '../../styles/layout/app/newexam/newexam.module.scss'
import { GETExamOptions, GETLabOptions } from '../api/newexam/route';

export default async function Newexam() {
    const [selectedLab, setSelectedLab] = useState(null);

    const examoptionresponse = await GETExamOptions();
    const examOption = await examoptionresponse;
    console.log("/////////////////////////////");
    console.log(examOption);

    const labOptionResponse = await GETLabOptions();
    const labOption = await labOptionResponse.json();

    const handleLabChange = (e) => {
        const selectedLab = labOption.find(lab => lab.id === e.target.value);
        setSelectedLab(selectedLab);
        console.log(selectedLab)
    }

    return (
        <main className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <h1>Novo Exame</h1>

                    <form>
                        <label htmlFor="ExamOptionSelect">Tipo de exame:</label>
                        <select id="ExamOptionSelect" name="ExamOptionSelect">
                            {examOption.map(examOption => (
                                <option key={examOption.id} value={examOption.id}>
                                    {examOption.nome}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="LabOptionSelect">Laboratório:</label>
                        <select id="LabOptionSelect" name="LabOptionSelect" onChange={handleLabChange}>
                            {labOption.map(lab => (
                                <option key={lab.id} value={lab.id}>
                                    {lab.nome}
                                </option>
                            ))}
                        </select>

                        {selectedLab && (
                            <>
                                <label htmlFor="LabDetails">Detalhes do Laboratório:</label>
                                <textarea id="LabDetails" name="LabDetails" value={JSON.stringify(selectedLab, null, 2)} readOnly />
                            </>
                        )}

                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </div>
        </main>
    )
}

"use client";
import { useState, useEffect } from 'react';
import styles from '../../styles/layout/app/newexam/newexam.module.scss'

export default function Newexam() {
    const [selectedLab, setSelectedLab] = useState(null);
    const [examOption, setExamOption] = useState([]);
    const [labOption, setLabOption] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const examoptionresponse = await fetch('http://localhost:3000/api/newexam/examtype');
            const examOption = await examoptionresponse.json();
            setExamOption(examOption);

            const labOptionResponse = await fetch('http://localhost:3000/api/newexam/laboption');
            const labOption = await labOptionResponse.json();
            setLabOption(labOption);
            console.log(labOption)
        }

        // eu preciso de um json com o id principal do usuario lá no Login, de tipo de exame e do lab
        // especialização do exame
        // glicemia precisa de 10 parametro e hemograma precisa de 11 parametros retornando em um json para retornar ao ronald 
        // ter classificação no cadastro mocada - por ultimo

        fetchData();
    }, []);

    const handleLabChange = (e) => {
        const selectedLabId = Number(e.target.value);
        const selectedLab = labOption.find(lab => lab.id === selectedLabId);
        setSelectedLab(selectedLab);
        console.log(selectedLab);
        console.log()
        // should now log the selected lab or null
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

                        <h2>Detalhes do Laboratório:</h2>
                        <label htmlFor="LabOptionSelect">Laboratório:</label>
                        <select id="LabOptionSelect" name="LabOptionSelect" onChange={handleLabChange}>
                            {labOption.map(lab => (
                                <option key={lab.id} value={lab.id}>
                                    {lab.nome}
                                </option>
                            ))}
                        </select>

                        {selectedLab && (
                            <div>
                                <p><strong>Nome:</strong> {selectedLab.nome}</p>
                                <p><strong>Razão Social:</strong> {selectedLab.razaoSocial}</p>
                                <p><strong>Responsável Técnico:</strong> {selectedLab.responsavelTecnico}</p>
                                <p><strong>Telefone:</strong> {selectedLab.telefone}</p>
                                <p><strong>Email:</strong> {selectedLab.email}</p>
                                <p><strong>CNPJ:</strong> {selectedLab.cnpj}</p>
                                {selectedLab.endereco && (
                                    <p><strong>Endereço:</strong> {selectedLab.endereco.logradouro.nome}, {selectedLab.endereco.numero} {selectedLab.endereco.cep}</p>
                                )}
                            </div>
                        )}


                        <button type="submit">Enviar</button>
                    </form>

                </div>
            </div>
        </main>
    )
}

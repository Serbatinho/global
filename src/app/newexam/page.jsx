"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../../styles/layout/app/newexam/newexam.module.scss'

export default function Newexam() {
    const [selectedLab, setSelectedLab] = useState(null);
    const [examOption, setExamOption] = useState([]);
    const [labOption, setLabOption] = useState([]);
    const [newExam, setNewExam] = useState();
    const [loggedUser, setLoggedUser] = useState(null);
    const router = useRouter();


    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            setLoggedUser(null);
        } else {
            setLoggedUser(JSON.parse(sessionStorage.getItem('user')));
        }
    }, []);

    useEffect(() => {
        if (loggedUser && loggedUser.id) {
            const { id } = loggedUser;
            setPaciente(id);
        }
    }, [loggedUser])

    useEffect(() => {
        if (sessionStorage.getItem('user') === null) {
            router.push('/')
        }
    }, [router]);

    const [classificacao, setClassificacao] = useState('');
    const [especificacao, setEspecificacao] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [paciente, setPaciente] = useState('');
    const [tipo, setTipo] = useState('');
    const [parametro1, setParametro1] = useState('');
    const [parametro2, setParametro2] = useState('');
    const [parametro3, setParametro3] = useState('');
    const [parametro4, setParametro4] = useState('');
    const [parametro5, setParametro5] = useState('');
    const [parametro6, setParametro6] = useState('');
    const [parametro7, setParametro7] = useState('');
    const [parametro8, setParametro8] = useState('');
    const [parametro9, setParametro9] = useState('');
    const [parametro10, setParametro10] = useState('');
    const [parametro11, setParametro11] = useState('');
    const [parametro12, setParametro12] = useState('');
    const [parametro13, setParametro13] = useState('');
    const [parametro14, setParametro14] = useState('');
    const [parametro15, setParametro15] = useState('');
    const [parametro16, setParametro16] = useState('');
    const [parametro17, setParametro17] = useState('');



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

        fetchData();
    }, []);

    useEffect(() => {
    }, [labOption, examOption])

    const handleLabChange = (e) => {
        const selectedLabId = Number(e.target.value);
        const selectedLab = labOption.find(lab => lab.id === selectedLabId);
        setSelectedLab(selectedLab);
        console.log(selectedLab);
        console.log()
    }

    const handleButtonClick = (event) => {
        event.preventDefault();

        let newexam = {
            "DS_CLASSIFICACAO": classificacao,
            "DS_ESPECIALIZACAO": especificacao,
            "ID_LABORATORIO": laboratorio,
            "ID_PACIENTE": paciente,
            "ID_TIPO": tipo,
            "VL_PARAMETRO_1": parametro1,
            "VL_PARAMETRO_2": parametro2,
            "VL_PARAMETRO_3": parametro3,
            "VL_PARAMETRO_4": parametro4,
            "VL_PARAMETRO_5": parametro5,
            "VL_PARAMETRO_6": parametro6,
            "VL_PARAMETRO_7": parametro7,
            "VL_PARAMETRO_8": parametro8,
            "VL_PARAMETRO_9": parametro9,
            "VL_PARAMETRO_10": parametro10,
            "VL_PARAMETRO_11": parametro11,
            "VL_PARAMETRO_12": parametro12,
            "VL_PARAMETRO_13": parametro13,
            "VL_PARAMETRO_14": parametro14,
            "VL_PARAMETRO_15": parametro15,
            "VL_PARAMETRO_16": parametro16,
            "VL_PARAMETRO_17": parametro17,

        }

        console.log(newexam);
        setNewExam(newexam)
    };

    const enviarDados = async (event) => {
        event.preventDefault();

        let obj = { "email": email, "password": password }
        try {
            const userResponse = await fetch('http://127.0.0.1:8000/cadExame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            if (!userResponse.ok) {
                throw new Error(`HTTP error! status: ${userResponse.status}`);
            }
            const user = await userResponse.json();
            sessionStorage.setItem('user', JSON.stringify(user));
            window.location.reload();

            alert("Dados enviados com sucesso!");
        } catch (error) {
            console.error('Fetch failed:', error);
            alert("Falha ao enviar dados!");
        }
    };



    const handleInputChange = (event) => {
        switch (event.target.name) {
            case 'classificacao':
                setClassificacao(event.target.value);
                break;
            case 'especificacao':
                setEspecificacao(event.target.value);
                break;
            case 'LabOptionSelect':
                setLaboratorio(event.target.value);
                break;
            case 'resultado':
                setResultado(event.target.value);
                break;
            case 'ExamOptionSelect':
                setTipo(event.target.value);
                break;
            case 'parametro1':
                setParametro1(event.target.value);
                break;
            case 'parametro2':
                setParametro2(event.target.value);
                break;
            case 'parametro3':
                setParametro3(event.target.value);
                break;
            case 'parametro4':
                setParametro4(event.target.value);
                break;
            case 'parametro5':
                setParametro5(event.target.value);
                break;
            case 'parametro6':
                setParametro6(event.target.value);
                break;
            case 'parametro7':
                setParametro7(event.target.value);
                break;
            case 'parametro8':
                setParametro8(event.target.value);
                break;
            case 'parametro9':
                setParametro9(event.target.value);
                break;
            case 'parametro10':
                setParametro10(event.target.value);
                break;
            case 'parametro11':
                setParametro11(event.target.value);
                break;
            case 'parametro12':
                setParametro12(event.target.value);
                break;
            case 'parametro13':
                setParametro13(event.target.value);
                break;
            case 'parametro14':
                setParametro14(event.target.value);
                break;
            case 'parametro15':
                setParametro15(event.target.value);
                break;
            case 'parametro16':
                setParametro16(event.target.value);
                break;
            case 'parametro17':
                setParametro17(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <main className={`${styles['full-content-container']}`}>
            <div className={`${styles['mid-content-container']}`}>
                <div className={`${styles['content-container']}`}>
                    <h1>Novo Exame</h1>

                    <form>
                        <label htmlFor="ExamOptionSelect">Tipo de exame:</label>
                        <select id="ExamOptionSelect" name="ExamOptionSelect" onChange={handleInputChange}>
                            {examOption.map(examOption => (
                                <option key={examOption.id} value={examOption.id} >
                                    {examOption.nome}
                                </option>
                            ))}
                        </select>

                        <h2>Detalhes do Laboratório:</h2>
                        <label htmlFor="LabOptionSelect">Laboratório:</label>
                        <select id="LabOptionSelect" name="LabOptionSelect" onChange={handleInputChange}>
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

                        <label>
                            Classificação:
                            <input type="text" name="classificacao" value={classificacao} onChange={handleInputChange} />
                        </label>
                        <label>
                            Especificação:
                            <input type="text" name="especificacao" value={especificacao} onChange={handleInputChange} />
                        </label>
                        <label>
                            Laboratório:
                            <input type="text" name="laboratorio" value={laboratorio} onChange={handleInputChange} />
                        </label>
                        <label>
                            Tipo:
                            <input type="text" name="tipo" value={tipo} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 1:
                            <input type="text" name="parametro1" value={parametro1} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 2:
                            <input type="text" name="parametro2" value={parametro2} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 3:
                            <input type="text" name="parametro3" value={parametro3} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 4:
                            <input type="text" name="parametro4" value={parametro4} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 5:
                            <input type="text" name="parametro5" value={parametro5} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 6:
                            <input type="text" name="parametro6" value={parametro6} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 7:
                            <input type="text" name="parametro7" value={parametro7} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 8:
                            <input type="text" name="parametro8" value={parametro8} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 9:
                            <input type="text" name="parametro9" value={parametro9} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 10:
                            <input type="text" name="parametro10" value={parametro10} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 11:
                            <input type="text" name="parametro11" value={parametro11} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 12:
                            <input type="text" name="parametro12" value={parametro12} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 13:
                            <input type="text" name="parametro13" value={parametro13} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 14:
                            <input type="text" name="parametro14" value={parametro14} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 15:
                            <input type="text" name="parametro15" value={parametro15} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 16:
                            <input type="text" name="parametro16" value={parametro16} onChange={handleInputChange} />
                        </label>
                        <label>
                            Parâmetro 17:
                            <input type="text" name="parametro17" value={parametro17} onChange={handleInputChange} />
                        </label>


                        <button type="submit" onClick={handleButtonClick} >Enviar</button>
                    </form>

                </div>
            </div>
        </main>
    )
}

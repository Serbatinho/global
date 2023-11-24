import styles from '../styles/layout/app/Home/home.module.scss'

export default async function Home() {

  return (
    <main className={`${styles['full-content-container']}`}>
      <div className={`${styles['mid-content-container']}`}>
        <div className={`${styles['content-container']}`}>
          <h1>Home</h1>
          <h2>Descrição do Projeto</h2>
          <p>
          A solução apresenta uma alternativa à forma de lidar com os exames 
          dos pacientes e em como as partes envolvidas lidam com os resultados 
          durante a jornada do paciente. Por exemplo, não é incomum um paciente ir ao 
          médico ou marcar uma consulta querendo realizar o famoso “checkup”, e em 
          muitas situações é mobilizada uma estrutura durante toda essa jornada, 
          marcando uma consulta com o médico, indo até seu consultório para saber 
          quais exames fazer, a realização desses exames, o recebimento desses 
          exames que, muitas vezes em formato PDF e que em muitas situações gera 
          uma certa dificuldade do paciente em sua interpretação, e por fim, gerando a 
          necessidade do paciente a ir se encontrar com o médico pessoalmente 
          correndo o risco da resposta ser simplesmente um “está tudo bem com os seus 
          exames”.</p>
          <p>Visando simplificar esse processo ou, pelo menos, apresentar uma 
          alternativa que gere maior comodidade tanto para os pacientes, quanto 
          vantagens econômicas e melhor aproveitamento dessa estrutura física, a 
          solução coleta os dados desse exame e, por meio de uma IA é feita uma 
          análise dos parâmetros contidos no resultado do exame, afim de dar um 
          parecer mais simplificado sobre o resultado do exame. </p>
        </div>
      </div>
    </main>
  )
}

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import styled from "styled-components";

const FullContainerEnviarPeca = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 80vh;
`;

const HeaderEnviarPeca = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3rem;
  }
`;

const MainEnviarPeca = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormEnviarPeca = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 20px -3px rgb(201, 201, 201);
  -moz-box-shadow: 0px 0px 20px -3px rgba(138, 138, 138, 1);
  box-shadow: 0px 0px 20px -3px rgba(138, 138, 138, 1);
  background-color: #fff;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    text-align: center;
  }

  label {
    margin-bottom: 10px;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 0.3rem;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
  }

  input[type="file"]::before {
    content: "Selecionar arquivo";
    /* Texto do botão */
    display: inline-block;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #345237;
    /* Cor do botão */
    color: white;
    /* Cor do texto do botão */
    cursor: pointer;
  }

  input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }

  button {
    padding: 0.5rem;
    background-color: #345237;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
  }
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const EnviarPecas = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const handleNextStep = (step) => {
    if (step == 1) {
      setStep1(true);
      setStep2(false);
      setStep3(false);
    }
    if (step == 2) {
      setStep1(false);
      setStep2(true);
      setStep3(false);
    }
    if (step == 3) {
      setStep1(false);
      setStep2(false);
      setStep3(true);
    }
  };

  return (
    <FullContainerEnviarPeca>
      <HeaderEnviarPeca>
        <h1>Relatório Mensal de Atividades</h1>
        <h3>Estágio Probatório</h3>
      </HeaderEnviarPeca>
      <MainEnviarPeca>
        {step1 && (
          <FormEnviarPeca>
            <h3>Informações Gerais</h3>
            <label>
              Lotação
              <select>
                <option defaultValue selected disabled>
                  Selecione sua Lotação
                </option>
                <option>TESTE</option>
                <option>TESTE</option>
                <option>TESTE</option>
                <option>TESTE</option>
                <option>TESTE</option>
              </select>
            </label>
            <label>
              Número de Protocolo do Relatório de Atividades Funcionais- RAF
              <input type="text" placeholder="Digite o protocolo do RAF" />
            </label>
            <label>
              Anexar arquivos do RAF
              <input type="file" name="arquivoRaf" id="arquivoRaf" />
            </label>
            <label>
              Observações
              <textarea
                cols="30"
                rows="5"
                placeholder="Digite SOMENTE se tiver entrado de férias ou se tiver atestado"
              ></textarea>
            </label>
            <ContainerButtons>
              <button type="button" onClick={() => handleNextStep(2)}>
                Próximo
                <ArrowRight />
              </button>
            </ContainerButtons>
          </FormEnviarPeca>
        )}
        {step2 && (
          <FormEnviarPeca>
            <h3>Primeira Peça</h3>
            <label>Número do processo</label>
            <input type="text" placeholder="Digite o número de processo" />
            <label>
              Data do Processo
              <input type="date" />
            </label>
            <label>
              Anexar arquivo do Processo
              <input type="file"/>
            </label>
            <label>
              Lotação
              <select>
                <option defaultValue selected disabled>
                  Área do Processo
                </option>
                <option>Cívil</option>
                <option>Penal</option>
                <option>Família</option>
              </select>
            </label>
            <ContainerButtons>
              <button type="button" onClick={() => handleNextStep(1)}>
                <ArrowLeft />
                Voltar
              </button>
              <button type="button" onClick={() => handleNextStep(3)}>
                Próximo
                <ArrowRight />
              </button>
            </ContainerButtons>
          </FormEnviarPeca>
        )}
        {step3 && (
           <FormEnviarPeca>
           <h3>Segunda Peça</h3>
           <label>Número do processo</label>
           <input type="text" placeholder="Digite o número de processo" />
           <label>
             Data do Processo
             <input type="date" />
           </label>
           <label>
             Anexar arquivo do Processo
             <input type="file"/>
           </label>
           <label>
             Lotação
             <select>
               <option selected disabled>
                 Área do Processo
               </option>
               <option>Cívil</option>
               <option>Penal</option>
               <option>Família</option>
             </select>
           </label>
           <ContainerButtons>
             <button type="button" onClick={() => handleNextStep(2)}>
               <ArrowLeft />
               Voltar
             </button>
             <button type="button" onClick={() => console.log("Meu piru")}>
               Finalizar
               <ArrowRight />
             </button>
           </ContainerButtons>
         </FormEnviarPeca>
        )}
      </MainEnviarPeca>
    </FullContainerEnviarPeca>
  );
};

export default EnviarPecas;

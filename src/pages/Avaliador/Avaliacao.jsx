import React, { useState } from "react";
import styled from "styled-components";
import RadioButtonContainer from "../../components/RadioButton/RadioButtonContainer.jsx";

// Estilos para o componente principal
const FormContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  margin: 50px auto;
  padding: 20px;
  border-radius: 20px;
  width: 40%;
`;

// Estilos para os botões
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 20px;

  button {
    padding: 10px 16px;
    cursor: pointer;
    background-color: #345237;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
  }
  button:hover {
    background-color: #528156;
  }
`;
const AvaliacaoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 32px 0 0 0;
  flex-direction: column;
`;
const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 60px;
  border-radius: 7px;
  padding: 8px;
`;
const QuestoesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  div {
    width: 100%;
  }
`;
const Avaliacao = () => {
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
    <AvaliacaoContainer>
      <h1>Ficha de Avaliação de Peças Processuais</h1>
      <h3>Estágio Probatório</h3>
      {step1 && (
        <FormContainer>
          <h4>1- Qualidade da Redação</h4>
          <QuestoesContainer>
            <div>
              <p>
                <strong>a) Correta utilização da ortografia </strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <p>
                <strong>b) Correta utilização da gramática</strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <p>
                <strong>
                  c) Formatação da página e do texto, uso do logotipo da DPDF,
                  limpeza,ausência de rasuras
                </strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <label>
                <strong>Justificativa:</strong>
                <br />
                <TextArea type="text" placeholder="Digite a justificativa" />
              </label>
            </div>
          </QuestoesContainer>
          <StyledButtonContainer>
            <button type="button">CANCELAR</button>
            <button type="button" onClick={() => handleNextStep(2)}>
              PROXIMA PAGINA
            </button>
          </StyledButtonContainer>
        </FormContainer>
      )}
      {step2 && (
        <FormContainer>
          <h4>2- Adequação técnica e fundamentação</h4>
          <QuestoesContainer>
            <div>
              <p>
                <strong>
                  a) Uso de teses jurídicas compatíveis com o caso concreto
                </strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <label>
                <strong>Justificativa:</strong>
                <br />
                <TextArea type="text" placeholder="Digite a justificativa" />
              </label>
            </div>
            <div>
              <p>
                <strong>
                  b) Transcrição de legislação, doutrina e/ou jurisprudência
                  pertinente
                </strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <label>
                <strong>Justificativa:</strong>
                <br />
                <TextArea type="text" placeholder="Digite a justificativa" />
              </label>
            </div>
          </QuestoesContainer>
          <StyledButtonContainer>
            <button type="button" onClick={() => handleNextStep(1)}>
              VOLTAR
            </button>
            <button type="button" onClick={() => handleNextStep(1)}>
              CANCELAR
            </button>

            <button type="button" onClick={() => handleNextStep(3)}>
              PROXIMA PAGINA
            </button>
          </StyledButtonContainer>
        </FormContainer>
      )}
      {step3 && (
        <FormContainer>
          <h4>3- Sistematização lógica e nível de persuasão</h4>
          <QuestoesContainer>
            <div>
              <p>
                <strong>
                  a) Manifestação escrita com lógica e clareza,de forma a
                  facilitar a compreensão
                </strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <p>
                <strong>b) Argumentação eficiente</strong>
              </p>
              <RadioButtonContainer />
            </div>
            <div>
              <label>
                <strong>Justificativa:</strong>
                <br />
                <TextArea type="text" placeholder="Digite a justificativa" />
              </label>
            </div>
          </QuestoesContainer>
          <StyledButtonContainer>
            <button type="button" onClick={() => handleNextStep(2)}>
              VOLTAR
            </button>
            <button type="button">CANCELAR</button>
            <button type="button" onClick={() => console.log("ENVIANDO")}>
              ENVIAR
            </button>
          </StyledButtonContainer>
        </FormContainer>
      )}
    </AvaliacaoContainer>
  );
};

export default Avaliacao;

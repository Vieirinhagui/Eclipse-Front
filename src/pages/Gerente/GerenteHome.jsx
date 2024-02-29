import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 450px;
  height: auto;
  border-radius: 15px;
  background-color: #f8f8f8;
  padding: 16px;
  -webkit-box-shadow: 0px 4px 16px 1px rgba(107, 107, 107, 1);
  -moz-box-shadow: 0px 4px 16px 1px rgba(107, 107, 107, 1);
  box-shadow: 0px 4px 16px 1px rgba(107, 107, 107, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const ConteudoCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ButtonDetalhes = styled.button`
  background-color: #345237;
  border-radius: 16px;
  padding: 8px 25px;
  color: white;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #447049;
  }
`;

const GerenteHome = () => {
  return (
    <CardContainer>
      <ConteudoCard>
        <img width="70px" src="/Defensor.svg" />
        <div>
          <p>
            <strong>Defensores</strong>
          </p>
          <p>
            Total: <strong>20</strong>
          </p>
        </div>
        <ButtonDetalhes>Detalhes</ButtonDetalhes>
      </ConteudoCard>

      <ConteudoCard>
        <img width="70px" src="/Avaliador.svg" />
        <div>
          <p>
            <strong>Avaliadores</strong>
          </p>
          <p>
            Total: <strong>20</strong>
          </p>
        </div>
        <ButtonDetalhes>Detalhes</ButtonDetalhes>
      </ConteudoCard>
      <ConteudoCard>
        <img width="70px" src="/Corregedor.svg" />
        <div>
          <p>
            <strong>Corregedores</strong>
          </p>
          <p>
            Total: <strong>20</strong>
          </p>
        </div>
        <ButtonDetalhes>Detalhes</ButtonDetalhes>
      </ConteudoCard>
    </CardContainer>
  );
};

export default GerenteHome;

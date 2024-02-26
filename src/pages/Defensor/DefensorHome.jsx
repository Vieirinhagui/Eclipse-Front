import { BarChart4, Files } from "lucide-react";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 15px;
  background-color: #F8F8F8;
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
    

`
const ButtonDetalhes = styled.button`
    background-color: #345237;
    border-radius: 16px;
    padding: 8px 25px;
    color: white;
    border: 0px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        background-color: #447049;
    }
`


const DefensorHome = () => {
  return (
    <CardContainer>
        <ConteudoCard>
            <BarChart4 size={50} color="#000" />
            <div>
                <p><strong>Média de Notas</strong></p>
                <p>Nota: <strong>10/10</strong></p>
            </div>
            <ButtonDetalhes>
                Detalhes
            </ButtonDetalhes>
        </ConteudoCard>

        <ConteudoCard>
            <Files size={50} color="#000"/>
            <div>
                <p><strong>Peças Enviadas</strong></p>
                <p>Total: <strong>20</strong> peças</p>
            </div>
            <ButtonDetalhes>
                Detalhes
            </ButtonDetalhes>
        </ConteudoCard>
    </CardContainer>
  );
};

export default DefensorHome;

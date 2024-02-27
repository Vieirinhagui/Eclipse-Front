import React from "react";
import BuscarTable from "../../components/BuscarTable";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border-radius: 15px;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.3);
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const InputButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;
const BotaoStyled = styled.button`
  background-color: #345237;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;
const GerenteBuscarCorregedores = () => {
  return (
    <div>
      <SearchContainer>
        <InputContainer>
        <p>Filtrar por:</p>
          <div>
            <label htmlFor="busca-nome">Nome</label>
            <InputButton type="radio" name="busca" id="busca-nome" />
          </div>
          <div>
            <label htmlFor="busca-matricula">Matrícula</label>
            <InputButton type="radio" name="busca" id="busca-matricula" />
          </div>
        </InputContainer>

        <input type="text" />
        <BotaoStyled type="submit">Buscar</BotaoStyled>
      </SearchContainer>
      <BuscarTable />
    </div>
  );
};

export default GerenteBuscarCorregedores;

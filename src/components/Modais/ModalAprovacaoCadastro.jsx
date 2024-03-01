import { AlertCircle, X } from "lucide-react";
import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 20vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 20px;
  gap: 16px;
`;

const HeaderModalContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const BodyModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "#345237")};
  color: white;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`;
const ModalAprovacaoCadastro = ({ onClose, id }) => {
  return (
    <BackgroundContainer>
      <ModalContainer>
        <HeaderModalContainer></HeaderModalContainer>
        <BodyModalContainer>
          <AlertCircle size={100} color="#345237" />
          <ButtonsContainer>
            <ButtonStyled color="#00a010">Aprovar Cadastro</ButtonStyled>
            <ButtonStyled color="#DD3333" onClick={onClose}>
              Cancelar
            </ButtonStyled>
          </ButtonsContainer>
        </BodyModalContainer>
      </ModalContainer>
    </BackgroundContainer>
  );
};

export default ModalAprovacaoCadastro;

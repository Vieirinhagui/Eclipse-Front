import { AlertCircle, AlertOctagon } from "lucide-react";
import React from "react";
import styled from "styled-components";

const BackgroundModal = styled.div`
    width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5.5rem;
`
const ContainerModal = styled.div`
  width: 25vw;
  height: 40vh;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const InfoModal = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

`

const ContainerButtons = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    flex-direction: row;

    button{
    background-color: #345237;
    width: 100px;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 7px;
      font-weight: bold;
      cursor: pointer;
    }
    button.aprovar{
        background-color: #00a010;
    }
    button.cancelar{
        background-color: #DD3333;
    }
`

const ModalAprovarAvaliador = ({ closeModal }) => {
  return (
    <BackgroundModal>
        <ContainerModal>
        <AlertCircle size={100} strokeWidth={1.50} />
            <InfoModal>
                <h3><strong>Deseja aprovar o Avaliador?</strong> </h3>
                <p>Você não poderá reverter isso!</p>
            </InfoModal>
            <ContainerButtons>
                <button onClick={() => closeModal()} className="aprovar">Aprovar</button>
                <button onClick={() => closeModal()} className="cancelar">Cancelar</button>
            </ContainerButtons>
        
        
            
        </ContainerModal>
    </BackgroundModal>
  );
};

export default ModalAprovarAvaliador;

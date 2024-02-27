import React, { useState } from "react";
import styled from "styled-components";
import ModalAprovarAvaliador from "./ModalAprovar.jsx";

const TableContainer = styled.div`
  width: auto;
  min-width: 50vw;
  height: auto;
  min-height: 300px;
  border-radius: 15px;
  background-color: #f8f8f8;
  padding: 16px;
  box-shadow: 0px 4px 16px 1px rgba(107, 107, 107, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;

  th,
  td:nth-child(3) {
    width: 60%;
  }

  tr {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 8px;

    &:nth-child(even) {
      background-color: #ececec;
    }

    td {
      flex: 1;
      text-align: center;
    }
    th {
      flex: 1;
      text-align: center;
    }
    button {
      background-color: #345237;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 7px;
      cursor: pointer;
      font-weight: bold;
      &:hover {
        background-color: #416b44;
      }
    }
  }
`;

const AprovarTable = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  
  return (
    <>
      {openModal && <ModalAprovarAvaliador closeModal={handleOpenModal} />}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Status Cadastro</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AVA001</td>
              <td>Guilherme Vieira</td>
              <td>vieiragui147@gmail.com</td>
              <td>Pendente</td>
              <td>
                <button onClick={handleOpenModal}>Aprovar</button>
              </td>
            </tr>
            <tr>
              <td>AVA001</td>
              <td>Guilherme Vieira</td>
              <td>vieiragui147@gmail.com</td>
              <td>Pendente</td>
              <td>
                <button onClick={handleOpenModal}>Aprovar</button>
              </td>
            </tr>
            <tr>
              <td>DEF001</td>
              <td>Guilherme Vieira</td>
              <td>vieiragui147@gmail.com</td>
              <td>Pendente</td>
              <td>
                <button onClick={handleOpenModal}>Aprovar</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AprovarTable;


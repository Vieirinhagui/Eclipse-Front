import React, { useState } from "react";
import styled from "styled-components";
import ModalAprovacaoCadastro from "../Modais/ModalAprovacaoCadastro";

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
  td {
    width: 60%;
  }
`;

const TableRow = styled.tr`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;

  &:nth-child(even) {
    background-color: #ececec;
  }
  th,
  td {
    flex: 1;
    text-align: center;
  }
`;

const Button = styled.button`
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
`;

const TableCadastrosPendentes = () => {
  const [aprovarId, setAprovarId] = useState(null);

  const handleAprovar = (id) => {
    
    setAprovarId(id);
  };
  const handleCloseModal = () => {
    setAprovarId(false);
  };
  return (
    <TableContainer>
      {aprovarId && (
        <ModalAprovacaoCadastro id={aprovarId} onClose={handleCloseModal} />
      )}
      <Table>
        <thead>
          <TableRow>
            <th>Matrícula</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ação</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td>AVA001</td>
            <td>Guilherme Vieira</td>
            <td>vieiragui147@gmail.com</td>
            <td>
              <Button onClick={() => handleAprovar(1)}>Aprovar</Button>
            </td>
          </TableRow>
          <TableRow>
            <td>AVA002</td>
            <td>João Silva</td>
            <td>joaosilva@example.com</td>
            <td>
              <Button onClick={() => handleAprovar(2)}>Aprovar</Button>
            </td>
          </TableRow>
          <TableRow>
            <td>DEF001</td>
            <td>Maria Oliveira</td>
            <td>mariaoliveira@example.com</td>
            <td>
              <Button onClick={() => handleAprovar(3)}>Aprovar</Button>
            </td>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCadastrosPendentes;

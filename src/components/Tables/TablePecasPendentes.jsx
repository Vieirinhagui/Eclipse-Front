import React from "react";
import styled from "styled-components";

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
  TableData:nth-child(2) {
    width: 100%;
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
  th {
    flex: 1;
    text-align: center;
  }
`;

const TableData = styled.td`
  flex: 1;
  text-align: center;
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
const TablePecas = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <th>Número da Peça</th>
            <th>Área da Peça</th>
            <th>Ação</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>123456789</TableData>
            <TableData>Cívil</TableData>
            <TableData>
              {/* PRECISA NAVEGAR PARA PAGINA DE AVALIAÇÃO E ABRIR A PEÇA */}
              <Button>Avaliar</Button>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>123456789</TableData>
            <TableData>Cívil</TableData>
            <TableData>
              <Button>Avaliar</Button>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>123456789</TableData>
            <TableData>Cívil</TableData>
            <TableData>
              <Button>Avaliar</Button>
            </TableData>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default TablePecas;

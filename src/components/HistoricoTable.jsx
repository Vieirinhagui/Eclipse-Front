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
      padding: 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
const HistoricoTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Número Peça</th>
            <th>Área Peça</th>
            <th>Status Avaliação</th>
            <th>Nota</th>
            <th>Baixar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345678</td>
            <td>Cívil</td>
            <td>Pendente</td>
            <td>--/10</td>
            <td>
              <button>Avaliação</button>
            </td>
          </tr>
          <tr>
            <td>12345678</td>
            <td>Cívil</td>
            <td>Pendente</td>
            <td>--/10</td>
            <td>
              <button>Avaliação</button>
            </td>
          </tr>
          <tr>
            <td>12345678</td>
            <td>Cívil</td>
            <td>Pendente</td>
            <td>--/10</td>
            <td>
              <button>Avaliação</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default HistoricoTable;

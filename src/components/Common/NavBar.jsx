import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { Home, LogOut, NotebookPen, NotebookText } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #345237;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 128px;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const NavLinkStyled = styled(NavLink)`
  width: 100%;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  &.active {
    background-color: white;
    color: black;
    svg {
      stroke-width: 2.5px;
      stroke: black;
      fill: none;
    }
  }
`;

const NavBar = ({ role }) => {
  return (
    <NavBarContainer>
      <Logo />
      <LinksContainer>
        {role == "avaliador" && (
          <>
            <NavLinkStyled to="/avaliador/home">
              <Home color="#ffffff" /> Home
            </NavLinkStyled>
            <NavLinkStyled to="/avaliador/historico">
              <NotebookText color="#ffffff" /> Historico de Peças
            </NavLinkStyled>
            <NavLinkStyled to="/avaliador/pecas">
              <NotebookPen color="#ffffff" /> Peças Pendentes
            </NavLinkStyled>
          </>
        )}
        {role == "defensor" && (
          <>
            <NavLinkStyled to="/defensor/home">
              <Home color="#ffffff" /> Home
            </NavLinkStyled>
            <NavLinkStyled to="/defensor/historico">
              <NotebookText color="#ffffff" /> Historico de Peças
            </NavLinkStyled>
            <NavLinkStyled to="/defensor/enviarpecas">
              <NotebookPen color="#ffffff" /> Enviar Peças
            </NavLinkStyled>
          </>
        )}
        {role == "gerente" && (
          <>
            <NavLinkStyled to="/gerente/home">
              <Home color="#ffffff" /> Home
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/aprovar/avaliador">
              <NotebookText color="#ffffff" /> Aprovar Avaliador
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/aprovar/defensor">
              <NotebookPen color="#ffffff" /> Aprovar Defensor
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/buscar/avaliadores">
              <NotebookPen color="#ffffff" /> Buscar Avaliadores
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/buscar/defensores">
              <NotebookPen color="#ffffff" /> Buscar Defensores
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/buscar/corregedores">
              <NotebookPen color="#ffffff" /> Buscar Corregedores
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/buscar/pecas">
              <NotebookPen color="#ffffff" /> Buscar Peças
            </NavLinkStyled>
            <NavLinkStyled to="/gerente/buscar/triagens">
              <NotebookPen color="#ffffff" /> Buscar Triagens
            </NavLinkStyled>
            {/* <NavLinkStyled to="/gerente/buscar/recursos">
              <NotebookPen color="#ffffff" /> Buscar Recursos
            </NavLinkStyled> */}
          </>
        )}
      </LinksContainer>
      <NavLinkStyled to="/login">
        <LogOut color="#ffffff" /> Logout
      </NavLinkStyled>
    </NavBarContainer>
  );
};

export default NavBar;

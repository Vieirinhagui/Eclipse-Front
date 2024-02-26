import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";

//Defensor
import Defensor from "./pages/Defensor/DefensorHome.jsx";
import Layout from "./pages/Layout.jsx";
import DefensorHistoricoPecas from "./pages/Defensor/HistoricoPecas.jsx";
import EnviarPecas from "./pages/Defensor/EnviarPecas.jsx";
import AvaliadorHome from "./pages/Avaliador/AvaliadorHome.jsx";
import AvaliadorHistorico from "./pages/Avaliador/HistoricoPecas.jsx";
import AvaliadorPecasPendentes from "./pages/Avaliador/AvaliadorPecasPendentes.jsx";
import Avaliacao from "./pages/Avaliador/Avaliacao.jsx";
import GerenteHome from "./pages/Gerente/GerenteHome.jsx";
import GerenteAprovarAvaliador from "./pages/Gerente/GerenteAprovarAvaliador.jsx";
import GerenteAprovarDefensor from "./pages/Gerente/GerenteAprovarDefensor.jsx";
import GerenteBuscarAvaliadores from "./pages/Gerente/GerenteBuscarAvaliadores.jsx";
import GerenteBuscarDefensores from "./pages/Gerente/GerenteBuscarDefensores.jsx";
import GerenteBuscarCorregedores from "./pages/Gerente/GerenteBuscarCorregedores.jsx";
import GerenteBuscarPecas from "./pages/Gerente/GerenteBuscarPecas.jsx";
import GerenteBuscarTriagens from "./pages/Gerente/GerenteBuscarTriagens.jsx";
import GerenteBuscarRecursos from "./pages/Gerente/GerenteBuscarRecursos.jsx";
// import HistoricoDefensor from "./pages/Defensor/Historico.jsx";
// import EnviarPecas from "./pages/Defensor/EnviarPecas.jsx";

// //Avaliador
// import Avaliador from "./pages/Avaliador/Avaliador.jsx";
// import HistoricoAvaliador from "./pages/Avaliador/Historico.jsx";
// import PecasPendentes from "./pages/Avaliador/PecasPendentes.jsx";
// import Avaliacao from "./pages/Avaliador/Avaliacao.jsx";

// //Gerente
// import Gerente from "./pages/Gerente/Home/Gerente.jsx";
// import CadastrosPendentes from "./pages/Gerente/CadastrosPendentes/CadastrosPendentes.jsx";
// import GerenteBuscarPecas from "./pages/Gerente/BuscarPecas/GerenteBuscarPecas.jsx";
// import GerenteBuscarTriagens from "./pages/Gerente/BuscarTriagens/GerenteBuscarTriagens.jsx";
// import GerenteBuscarRecursos from "./pages/Gerente/BuscarRecursos/GerenteBuscarRecursos.jsx";
// import GerenteBuscarAvaliadores from "./pages/Gerente/BuscarAvaliadores/GerenteBuscarAvaliadores.jsx";
// import { AuthProvider } from "./context/authContext.jsx";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/defensor/home"
            element={
              <Layout>
                <Defensor />
              </Layout>
            }
          />
          <Route
            path="/defensor/historico"
            element={
              <Layout role="defensor">
                <DefensorHistoricoPecas />
              </Layout>
            }
          />
          <Route
            path="/defensor/enviarpecas"
            element={
              <Layout role="defensor">
                <EnviarPecas />
              </Layout>
            }
          />
          <Route
            path="/avaliador/home"
            element={
              <Layout role="avaliador">
                <AvaliadorHome />
              </Layout>
            }
          />
          <Route
            path="/avaliador/historico"
            element={
              <Layout role="avaliador">
                <AvaliadorHistorico />
              </Layout>
            }
          />
          <Route
            path="/avaliador/pecas"
            element={
              <Layout role="avaliador">
                <AvaliadorPecasPendentes />
              </Layout>
            }
          />
          <Route path="/avaliador/avaliar/:id" element={<Avaliacao />} />
          <Route
            path="/gerente/home"
            element={
              <Layout role="gerente">
                <GerenteHome />
              </Layout>
            }
          />
          <Route
            path="/gerente/aprovar/avaliador"
            element={
              <Layout role="gerente">
                <GerenteAprovarAvaliador />
              </Layout>
            }
          />
          <Route
            path="/gerente/aprovar/defensor"
            element={
              <Layout role="gerente">
                <GerenteAprovarDefensor />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/avaliadores"
            element={
              <Layout role="gerente">
                <GerenteBuscarAvaliadores />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/defensores"
            element={
              <Layout role="gerente">
                <GerenteBuscarDefensores />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/corregedores"
            element={
              <Layout role="gerente">
                <GerenteBuscarCorregedores />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/pecas"
            element={
              <Layout role="gerente">
                <GerenteBuscarPecas />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/triagens"
            element={
              <Layout role="gerente">
                <GerenteBuscarTriagens />
              </Layout>
            }
          />
          <Route
            path="/gerente/buscar/recursos"
            element={
              <Layout role="gerente">
                <GerenteBuscarRecursos />
              </Layout>
            }
          />
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;

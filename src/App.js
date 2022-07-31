import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./componentes/Topo";
import Container_films from "./componentes/Container_films"
import Filme from './componentes/Filme'

export default function App() {
  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Container_films />} />
        <Route path="/filme/:id" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  );
}
import { Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Buscar from "./components/Buscar";
import Pokecake from "./components/Pokecake";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gap: 1,
        gridTemplateRows: "70px 1fr 70px",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(0.25turn, #ffebee, #ebf8e1, #e3f2fd)",
      }}
    >
      <Navbar />
      <Box sx={{ width: "90vw" }}>
        <Routes>
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokecake/:cakeId" element={<Pokecake />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

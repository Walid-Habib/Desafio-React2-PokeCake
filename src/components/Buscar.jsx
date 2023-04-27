// import { Context } from "../context/Context";
import { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default () => {
  const { fotos, setFotos } = useContext(Context)
  const [pokecake, setPokecake] = useState([]);
  const [pokecakeSeleccionado, setPokecakeSeleccionado] = useState("");
  const navigate = useNavigate();

  const redireccionarALaVistaDeDetalle = () => {
    navigate(`/pokecake/${pokecakeSeleccionado}`);
  };

  return (
    <Box style={{ textAlign: "center" }}>
      <select
        style={{ width: 300 }}
        onChange={({ target }) => setPokecakeSeleccionado(target.value)}
        value={pokecakeSeleccionado}
      >
        {fotos.map(({name: pokecakeNombre}, i) => (
          <option key={i} value="" >
            {pokecakeNombre}
          </option>
        ))}
        Soy Buscar
      </select>
      <Button
        disabled={!pokecakeSeleccionado}
        onClick={() => redireccionarALaVistaDeDetalle}
        component={NavLink}
        to=""
      >
        Ver detalles
      </Button>
    </Box>
  );
};

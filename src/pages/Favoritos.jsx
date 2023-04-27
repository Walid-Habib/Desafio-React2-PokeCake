import { Context } from "../context/Context";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);
  const favoritos = fotos.filter((foto) => foto.liked);
  
  if (favoritos.length == 0)
    return (
      <Stack alignItems="center" mt="3rem">
        <ErrorOutlineIcon color="error" sx={{ fontSize: "10rem" }} />
        <Typography variant="h6" color="error">
          Debe seleccionar alguno de los productos que ofrecemos en el menú
          HOME
        </Typography>
      </Stack>
    );
  else
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "15px",
        }}
      >
        {favoritos.map(({ src }, i) => {
          return (
            <Box
              key={i}
              onClick={() => {
                const foto = fotos.find((foto) => foto.src === src);
                foto.liked = false;
                setFotos([...fotos]);
              }}
              sx={{
                backgroundImage: `url("${src}")`,
                height: "200px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "120px 5px 5px 5px",
                border: 2,
                cursor:"pointer"
              }}
            >
              <IconButton sx={{ color: "red", height: "50px", scale: "1.5" }}>
                <DeleteForeverIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    );
}

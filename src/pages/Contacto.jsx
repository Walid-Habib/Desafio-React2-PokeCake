import Contactame from "../assets/img/Contactame.png";
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Contacto() {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let [mensajeDeError, setMensajeDeError] = useState({
    error: false,
    mensajeDeError: "",
  });

  const validarFormulario = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const eventoSubmit = (e) => {
    e.preventDefault();

    const formatoDeCorreoValidado = validarFormulario(email);

    if (formatoDeCorreoValidado) {
      setMensajeDeError({
        error: false,
        mensajeDeError: "",
      });
      setOpen(true);
      setEmail("");
      setComentario("");
    } else {
      setMensajeDeError({
        error: true,
        mensajeDeError: "Debe ingresar un formato de email válido",
      });
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent:"center", alignItem:"center"}}>
      <Avatar sx={{ height: 150, width: 150 }} srcSet={Contactame} />
      <Box component="form" onSubmit={eventoSubmit} width="30rem">
        <Stack spacing={2}>
          <TextField
            id="email"
            label="Ingrese su Email"
            variant="filled"
            color="secondary"
            size="small"
            type="text"
            error={mensajeDeError.error}
            helperText={mensajeDeError.mensajeDeError}
            required
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            onInput={(e) => {
              setComentario(e.target.value);
            }}
            value={comentario}
            id="contenido"
            label="Ingrese su comentario"
            variant="filled"
            color="secondary"
            type="text"
            size="small"
            rows={3}
            multiline
          />
        </Stack>
        <Button
          sx={{ mt: 2, width: "30px" }}
          type="submit"
          variant="outlined"
          color="secondary"
          disabled={!email.trim()}
        >
          Enviar
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" onClose={handleClose}>
            Comentario enviado, gracias por contactarnos!!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

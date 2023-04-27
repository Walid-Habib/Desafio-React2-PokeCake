import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import Imagen from "../assets/img/KingCake.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" color="secondary" style={{ width: "90vw" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "default",
        }}
        maxWidth="md"
      >
        <Box display="flex" alignItems="center">
          <Avatar sx={{ height: 40, width: 40, m: 0 }} srcSet={Imagen} />
          <Box ml={1}>
            <Typography sx={{ mt: 2, mb: -0.5, p: 0, fontSize: "12" }}>
              Grupo KingCake
            </Typography>
            <Typography
              fontSize={10}
              fontFamily={"sans-serif"}
              color={"lightgray"}
            >
              La Serena - Chile
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            color="inherit"
            endIcon={<HomeIcon />}
            component={NavLink}
            to="/"
            sx={{
              p: 2,
              "&.active": {
                color: "burlywood",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            endIcon={<FavoriteIcon />}
            component={NavLink}
            to="/favoritos"
            sx={{
              p: 2,
              "&.active": {
                color: "burlywood",
              },
            }}
          >
            Favoritos
          </Button>

          <Button
            color="inherit"
            endIcon={<ContactMailIcon />}
            component={NavLink}
            to="/contacto"
            sx={{
              p: 2,
              "&.active": {
                color: "burlywood",
              },
            }}
          >
            Contactanos
          </Button>
          <Button
            color="inherit"
            endIcon={<InfoIcon />}
            component={NavLink}
            to="/about"
            sx={{
              p: 2,
              "&.active": {
                color: "burlywood",
              },
            }}
          >
            About
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

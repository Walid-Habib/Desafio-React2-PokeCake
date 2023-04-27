import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Typography } from "@mui/material";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { fotos, setFotos } = useContext(Context);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "25px",
      }}
    >
      {fotos.map((photo, i) => {
        return (
          <Box
            key={i}
            sx={{
              backgroundImage: `url("${photo.src}")`,
              height: "150px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "120px 5px 5px 5px",
              border: 2,
              cursor: "default",
            }}
          >
            <IconButton
              sx={{ color: "red", padding: "0px",  }}
              onClick={() => {
                const foto = fotos[i];
                const estadoActualDelLike = foto.liked;
                if (estadoActualDelLike) foto.liked = false;
                else foto.liked = true;
                setFotos([...fotos]);
              }}
            >
              {photo.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton sx={{ padding: "0px"  }}>
              <Link to={`/pokecake/${photo.id}`}>
                <InfoIcon sx={{ color: "green" }} />
              </Link>
            </IconButton>
            <Typography
              sx={{
                mt: "90px", mr:"3px",
                textAlign: "end",
                fontWeight: "bold",
                color: "yellow",
                textShadow:
                  "0px 2px 3px green, 0px -2px 3px gray, 0px -2px 3px black",
              }}
            >
              {photo.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

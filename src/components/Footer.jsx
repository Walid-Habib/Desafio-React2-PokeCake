import { Box, IconButton, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box
      display="Grid"
      gridTemplateColumns="repeat(3,auto)"
      sx={{
        background: "#9c27b0",
        width: "90vw",
        cursor:"default"
      }}
    >
      <Typography sx={{ mt: 1.5, p: 1 }} color="#fff">
        Disfruta con nosotros de tu sabor preferido
      </Typography>
      <Box color="#fff">
        <Typography
          sx={{ mr: 0 }}
          variant="overline"
          fontWeight="bold"
          fontSize="0.5rem"
        >
          Contáctanos
        </Typography>
        <Typography sx={{ml:1}} fontSize={13}>Kingcakels@gmail.com</Typography>
        <Typography sx={{ml:1}} fontSize={13}>+56 9 6667 0784</Typography>
      </Box>
      <Box color="#fff">
        <Typography variant="overline" fontWeight="bold" fontSize="0.5rem">
          Síguenos
        </Typography>
        <Stack direction="row" sx={{ color: "#fff" }}>
          <IconButton
            href="https://www.instagram.com/kingcake_ls/"
            sx={{ color: "#fff" }}
            target="_blank"
          >
            <InstagramIcon className="icon" />
          </IconButton>

          <IconButton
            href="https://api.whatsapp.com/send/?phone=56966670784&text=%C2%BFEn+qu%C3%A9+podemos+servirte%3F&type=phone_number&app_absent=0"
            sx={{ color: "#fff" }}
            target="_blank"
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton href="" sx={{ color: "#fff" }} target="_blank">
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

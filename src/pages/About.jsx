import { Box } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.5582933211904!2d-71.25876952539087!3d-29.934616026190383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cb12a271902d%3A0x4931d3ebf8b4c8cc!2sHabibi%20La%20Serena!5e0!3m2!1sis!2sis!4v1681940685985!5m2!1sis!2sis"
        style={{
          borderRadius: "10px",
          border:"2px solid",
          width: "95%",
          height: "350px",
        }}
      ></iframe>
    </Box>
  );
}

import { Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
      <Stack alignItems="center" mt="3rem">
        <ErrorOutlineIcon color="error" sx={{ fontSize: "10rem" }} />
        <Typography variant="h6" color="error">
          Lo sentimos, ésta página no existe
        </Typography>
      </Stack>
  );
}

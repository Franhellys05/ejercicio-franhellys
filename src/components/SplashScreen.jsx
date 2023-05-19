import React from "react";
import { Box, Typography } from "@mui/material";
import img from "../img/pusheen-rececption.png";

const SplashScreen = () => {
  return (
    // Componente contenedor con estilos para centrar el contenido verticalmente
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      bgcolor="#f8f8f8"
    >
      {/* Texto del splash screen */}
      <Typography variant="h1">Tareas de Franhellys</Typography>
      <img
        src={img} // pusheen en recepción :3
        alt="Imagen"
        style={{ width: "300px", height: "300px" }}
      />
    </Box>
  );
};

export default SplashScreen;

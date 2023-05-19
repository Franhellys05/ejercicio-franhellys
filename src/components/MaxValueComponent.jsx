import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import img from "../img/pusheen-with-laptops.png";

const MaxValueComponent = () => {
  const [numbers, setNumbers] = useState([]); // Estado para almacenar el arreglo de números ingresado
  const [maxValue, setMaxValue] = useState(null); // Estado para almacenar el valor máximo calculado

  // Manejador de eventos para la modificación del campo de entrada
  const handleInputChange = (event) => {
    const inputNumbers = event.target.value
      .split(",")
      .map((number) => parseInt(number.trim()));

    setNumbers(inputNumbers); // Actualiza el estado con el arreglo de números ingresado
  };

  // Manejador de eventos para el botón "Obtener mayor"
  const handleGetMaxValue = () => {
    const max = Math.max(...numbers); // Calcula el valor máximo utilizando Math.max
    setMaxValue(max); // Actualiza el estado con el valor máximo calculado
  };

  return (
    <Box marginTop={2}>
      {/* Campo de entrada para ingresar los números separados por comas */}
      <TextField
        label="Ingrese los números (separados por comas)"
        variant="outlined"
        fullWidth
        onChange={handleInputChange}
      />
      {/* Botón para obtener el valor máximo */}
      <Button variant="contained" color="primary" onClick={handleGetMaxValue}>
        Obtener mayor
      </Button>
      {/* Muestra el valor máximo si está disponible */}
      {maxValue !== null && (
        <Typography variant="h2" marginTop={2}>
          Valor máximo: {maxValue}
        </Typography>
      )}

      <Box
        position="absolute"
        bottom={0}
        right={0}
        marginTop={2}
        marginRight={2}
      >
        <img
          src={img} // pusheen trabajando awww :3
          alt="Imagen"
          style={{ width: "250px", height: "150px" }}
        />
      </Box>
    </Box>
  );
};

export default MaxValueComponent;

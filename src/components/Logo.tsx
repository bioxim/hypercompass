import React from 'react';
import { Box } from '@mui/material';

// Definimos las propiedades que nuestro componente puede aceptar
interface LogoProps {
  width?: number | string; // El ancho del logo (opcional)
  height?: number | string; // El alto del logo (opcional)
}

const Logo: React.FC<LogoProps> = ({ width = 180, height = 'auto' }) => {
  return (
    <Box sx={{ width, height }}>
      <img 
        src="src\components\assets\logo.png" 
        alt="HyperCompass Logo" 
        style={{ width: '100%', height: '100%' }} 
      />
    </Box>
  );
};

export default Logo;


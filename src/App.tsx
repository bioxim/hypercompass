import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme'; // Importa el tema que creamos
import LandingPage from './components/LandingPage';

function App() {
  const [showDapp, setShowDapp] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza los estilos del navegador */}
      {showDapp ? (
        // Aquí irá el layout de tu dApp más adelante
        <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
          dApp is coming soon...
        </div>
      ) : (
        <LandingPage onLaunch={() => setShowDapp(true)} />
      )}
    </ThemeProvider>
  );
}

export default App;
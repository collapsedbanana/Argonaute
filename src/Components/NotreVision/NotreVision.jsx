import { Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Jura, sans-serif',
  },
});

const NotreVision = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: '#121212', color: 'white',padding: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Notre Vision
        </Typography>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring' }}
            >
              <Typography variant="h5" gutterBottom>
                Data Consulting
              </Typography>
              <Typography>
                Nos consultants experts vous aideront à exploiter la puissance de vos données pour orienter la prise de décision stratégique et optimiser la performance de votre entreprise.
              </Typography>
              <Button variant="contained" className="ButtonOrange" sx={{ mt: 2 }}>
                en savoir plus
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <Typography variant="h5" gutterBottom>
                Business Intelligence Solutions
              </Typography>
              <Typography>
                Nous proposons des solutions avancées de business intelligence pour transformer vos données brutes en insights exploitables, donnant ainsi à votre organisation les moyens de prospérer dans le monde actuel axé sur les données.
              </Typography>
              <Button variant="contained" className="ButtonOrange" sx={{ mt: 2 }}>
                en savoir plus
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <Typography variant="h5" gutterBottom>
                Analytics Tools
              </Typography>
              <Typography>
                Nos outils danalyse puissants vous permettent d explorer les données, de révéler des modèles cachés et de débloquer des insights précieux qui stimulent la croissance de votre entreprise.
              </Typography>
              <Button variant="contained" className="ButtonOrange" sx={{ mt: 2 }}>
                en savoir plus
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default NotreVision;

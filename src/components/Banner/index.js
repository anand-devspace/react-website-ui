import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styles from "./styles.js";
console.log("styles:",styles)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} style={styles.mainBlock}>
          <Item style={styles.subBlock}>
          <Box style={styles.subBlockBox} sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" component="h2">Helping people make the world a better place through quality software.</Typography>
            <Grid item xs={12} style={styles.buttonBlock}>
                <Button style={styles.primaryButton} variant="contained">Read the Blog</Button>
                <Button style={styles.secondaryButton} variant="outlined">More Here</Button>
            </Grid>
          </Box>
          </Item>
        </Grid>
        <Grid item xs={6} style={styles.subBlock}>
          <Item style={styles.subBlockBox}>
            <img src="/images/test-home-banner.webp" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

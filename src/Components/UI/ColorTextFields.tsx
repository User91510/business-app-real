import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

export default function ColorTextFields() {
  return (
    
  <Stack direction="column" alignItems="center" spacing={6} justifyContent="center"
  >

    <Stack direction="row" alignItems="center" spacing={4} justifyContent="center">
      <TextField label="Commodity" color="info" focused />
      <TextField label="Category" color="info" focused />
      <TextField label="Amount" color="info" focused />
      </Stack>

      <Stack direction="row" alignItems="center" spacing={4} justifyContent="center">
      <TextField label="Special order" color="info" focused />
      <TextField label="Note" color="info" focused />
      <TextField label="Sale coupon" color="info" focused />
      </Stack>
    </Stack>
  );
}
import React from 'react';
import { TextField } from '@mui/material';
import { FormBox } from '../../components/FormBox';

export const UserEnter = () => {
  const handleGetAutoInfo = () => {};
  return (
    <FormBox textTitle="Давайте знакомиться" onSubmit={handleGetAutoInfo}>
      <TextField
        id="user"
        variant="outlined"
        required={true}
        placeholder="Иванова И.И."
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',

          '& .MuiInputBase-input': {
            fontSize: '1.7em',
          },
        }}
      />
      <TextField
        id="email"
        type={'email'}
        variant="outlined"
        placeholder="racer@google.com"
        required={true}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          '& .MuiInputBase-input': { fontSize: '1.7em' },
        }}
      />
    </FormBox>
  );
};

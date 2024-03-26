import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { FormBox } from '../../components/FormBox';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slicers/user.slicer';

export const UserEnter = () => {
  const regExp = new RegExp(/^[.а-яА-ЯёЁ\s]+$/);

  const [notice, setNotice] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const { user, email } = data;
    console.log(user, email);
    if (regExp.test(user)) {
      dispatch(login({ username: user, email: email }));
      navigate('/AutoInfo');
    } else {
      setNotice(false);
      console.log(notice);
      // alert("oops, it's not your name");
    }
  };

  const funcColor = (notice) => {
    return notice ? '#ffffff' : '#ff0000';
  };

  return (
    <FormBox textTitle="Давайте знакомиться" onSubmit={handleSubmit}>
      <TextField
        id="user"
        variant="outlined"
        required={true}
        placeholder="Иванова И.И."
        name="user"
        sx={{
          backgroundColor: funcColor(notice),
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
        name="email"
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          '& .MuiInputBase-input': { fontSize: '1.7em' },
        }}
      />
    </FormBox>
  );
};


import React, { useState, FormEvent, ChangeEvent, Dispatch } from 'react';
import { TextField } from '@mui/material';
import { FormBox } from '../../components/FormBox';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slicers/user.slicer';
import { selectUser } from '../../store/selectors/user.selector';

export const UserEnter = () => {
  const regExp = new RegExp(/^[.а-яА-ЯёЁ\s]+$/);

  const [notice, setNotice] = useState<boolean>(true);
  const userSelector = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(
    userSelector.username ? userSelector.username : '',
  );
  const [email, setEmail] = useState(
    userSelector.email ? userSelector.email : '',
  );

  const handleChangeUserInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    // const data = Object.fromEntries(formData.entries());
    const { user, email } = data as { user: string; email: string };
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

  const funcColor = (notice: boolean): string => {
    return notice ? '#ffffff' : '#ff0000';
  };

  return (
    <FormBox textTitle="Давайте знакомиться" onSubmit={handleSubmit}>
      <TextField
        id="user"
        variant="outlined"
        required={true}
        placeholder={'Иванова И.И.'}
        value={username}
        onChange={(event) => handleChangeUserInfo(event, setUsername)}
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
        value={email}
        onChange={(event) => handleChangeUserInfo(event, setEmail)}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          '& .MuiInputBase-input': { fontSize: '1.7em' },
        }}
      />
    </FormBox>
  );
};

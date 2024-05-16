import React, { ChangeEvent, Dispatch, FormEvent, useState } from 'react';

import Button from '@mui/material/Button';
import { Container } from '../../components/Container';
import { useStyles } from './AutoInfoStyles';
import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addAuto } from '../../store/slicers/auto.slicer';
import { addLicense } from '../../store/slicers/license.slicer';
import { useNavigate } from 'react-router-dom';
import { selectAuto } from '../../store/selectors/auto.selector';
import { selectLicense } from '../../store/selectors/license.selector';

export const AutoInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const autoSelector = useSelector(selectAuto);
  const licenseSelector = useSelector(selectLicense);
  const [auto, setAuto] = useState(autoSelector ? autoSelector : '');
  const [license, setLicense] = useState(
    licenseSelector ? licenseSelector : '',
  );

  const handleChangeAutoInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(event.target.value);
  };
  const handleReturnPreviousStep = () => {
    navigate('/');
  };

  const handleGetAutoInfo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    const { auto, license } = data;
    dispatch(addAuto(auto));
    dispatch(addLicense(license));
    navigate('/InitialAutoData');
  };

  return (
    <Container className={classes.formContainer}>
      <Button
        variant="contained"
        className={classes.MuiButtonBaseRootMuiButtonRootReturnBtn}
        onClick={handleReturnPreviousStep}
      >
        Вернуться на предыдущий этап
      </Button>

      <Box
        component="form"
        autoComplete="off"
        className={classes.form}
        onSubmit={handleGetAutoInfo}
      >
        <h3 className={classes.formTitle}>Введите данные автомобиля</h3>
        <TextField
          id="auto"
          name="auto"
          label="Автомобиль"
          variant="outlined"
          required={true}
          placeholder="Volkswagen Polo 9418 TН-7"
          value={auto}
          onChange={(event) => {
            handleChangeAutoInfo(event, setAuto);
          }}
          helperText="Введите марку и госномер автомобиля"
          sx={{
            '& .MuiFormHelperText-root': {
              fontSize: '1em',
              marginBottom: '1em',
              '@media (max-width: 870px)': {
                fontSize: '0.5em',
              },
            },
            '& .MuiInputBase-input': { fontSize: '1.7em' },
          }}
        />
        <TextField
          id="license"
          name="license"
          label="Водительское удостоверение"
          variant="outlined"
          required={true}
          placeholder="7АА № 115849"
          value={license}
          onChange={(event) => {
            handleChangeAutoInfo(event, setLicense);
          }}
          helperText="Введите серию и номер ВУ"
          sx={{
            '& .MuiFormHelperText-root': {
              fontSize: '1em',
              marginBottom: '1em',
              '@media (max-width: 870px)': {
                fontSize: '0.5em',
              },
            },
            '& .MuiInputBase-input': { fontSize: '1.7em' },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          className={classes.MuiButtonBaseRootMuiButtonRootFormBtn}
        >
          Подтвердить
        </Button>
      </Box>
    </Container>
  );
};

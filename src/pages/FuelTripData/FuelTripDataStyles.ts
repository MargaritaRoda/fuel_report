import { createUseStyles } from 'react-jss';

type StyleKey = 'FuelTripContainer' | 'tableForm';
export const useStyles = createUseStyles<StyleKey>(() => {
  return {
    FuelTripContainer: {
      gridTemplateRows: '10% 90%',
      rowGap: '20px',
    },
    tableForm: {
      marginBottom: '100px',
      justifySelf: 'center',
      height: 'fit-content',
    },
  };
});


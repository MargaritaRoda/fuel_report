import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    FuelTripContainer: {
      gridTemplateRows: 'repeat(2, auto)',
      gridRowGap: '20px',
    },
    tableForm: {
      marginBottom: '100px',
      justifySelf: 'center',
    },
  };
});

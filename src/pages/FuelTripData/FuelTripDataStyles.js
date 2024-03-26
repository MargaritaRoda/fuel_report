import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    FuelTripContainer: {
      gridTemplateRows: '10% 90%',
      gridRowGap: '20px',
    },
    tableForm: {
      marginBottom: '100px',
      justifySelf: 'center',
      height: 'fit-content',
    },
  };
});

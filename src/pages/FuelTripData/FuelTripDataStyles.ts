import { createUseStyles } from 'react-jss';

type StyleKey = 'FuelTripContainer' | 'tableForm' | 'errorModal';
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
    errorModal: {
      position: 'absolute',
      top: 20,
      left: 20,
      backgroundColor: 'red',
      color: 'white',
      padding: 10,
      borderRadius: 5,
      zIndex: 1000,
    },
  };
});

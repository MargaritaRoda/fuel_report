import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    form: {
      justifySelf: 'center',
      margin: 'auto',
      height: 'fit-content',
      width: '960px',
      flexBasis: '960px',
      gap: '3em',
      padding: '54px',
      display: 'grid',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridTemplateColumns: '1fr',
      backgroundColor: '#000000',
      border: '1px solid #ffffff',
      borderRadius: '1.4em',
      fontSize: '1.4em',
      '@media (max-width: 870px)': {
        padding: '20px',
        gridTemplateRows: 'repeat(3, 0.5fr)',
      },
    },
    formTitle: {
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: '1.45em',
      color: '#ffffff',
    },
    MuiButtonBaseRootMuiButtonRootFormBtn: {
      height: '3em',
      fontSize: '1em',
      borderRadius: '8px',
      alignSelf: 'center',
      marginBottom: '32px',
      '@media (max-width: 870px)': {
        fontSize: '0.5em',
      },
    },
  };
});

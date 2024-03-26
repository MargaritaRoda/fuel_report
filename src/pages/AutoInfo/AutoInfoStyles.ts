import { createUseStyles, Styles } from 'react-jss';

type StyleKey = 'formContainer'|'form' | 'formTitle' | 'MuiButtonBaseRootMuiButtonRootFormBtn' | 'MuiButtonBaseRootMuiButtonRootReturnBtn'
export const useStyles = createUseStyles(() => {
  return {
    formContainer: {
      gridTemplateRows: '100px auto',
      fontSize: '1.4em',
    },
    form: {
      justifySelf: 'center',
      margin: 'auto',
      height: 'fit-content',
      width: 'clamp(350px, 40%, 960px)',
      padding: '54px',
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateColumns: '1fr',
      backgroundColor: '#ffffff',
      borderRadius: '1.4em',
      '@media (max-width: 870px)': {
        padding: '20px',
        gridTemplateRows: 'repeat(4, 0.5fr)',
      },
    },
    formTitle: {
      justifySelf: 'center',
      alignSelf: 'center',
      fontSize: '1.6em',
      '@media (max-width: 870px)': {
        fontSize: '1em',
      },
    },
    MuiButtonBaseRootMuiButtonRootFormBtn: {
      height: '3em',
      fontSize: '1em',
      borderRadius: '1.05em',
      alignSelf: 'center',
      '@media (max-width: 870px)': {
        fontSize: '0.5em',
      },
    },
    MuiButtonBaseRootMuiButtonRootReturnBtn: {
      fontSize: '1em',
      width: 'fit-content',
      justifySelf: 'flex-start',
      height: '3em',
      borderRadius: '1.05em',
      marginLeft: '1em',
      marginTop: '1em',
      '@media (max-width: 870px)': {
        fontSize: '0.5em',
      },
    },
  } as Styles<StyleKey>;
});

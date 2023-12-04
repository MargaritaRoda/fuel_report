import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    calendarScheme: {
      display: 'grid',
      gridTemplateRows: 'repeat(7, auto)',
      gridTemplateColumns: 'repeat(7, auto)',
      flex: '1',
      borderRadius: '16px',
      backgroundColor: 'white',
      padding: '24px',
      height: '50%',
    },
    calendarTitle: {
      gridArea: '1/1/1/8',
      justifySelf: 'center',
      alignSelf: 'center',
      fontSize: '32px',
      marginBottom: '16px',
    },
    mo: {
      gridArea: '2/1',
      justifySelf: 'center',
    },
    tu: {
      gridArea: '2/2',
      justifySelf: 'center',
    },
    we: {
      gridArea: '2/3',
      justifySelf: 'center',
    },
    th: {
      gridArea: '2/4',
      justifySelf: 'center',
    },
    fr: {
      gridArea: '2/5',
      justifySelf: 'center',
    },
    sa: {
      gridArea: '2/6',
      justifySelf: 'center',
    },
    su: {
      gridArea: '2/7',
      justifySelf: 'center',
    },
    MuiButtonBaseRootMuiButtonRootFormBtn: {
      height: '2em',
      fontSize: '1em',
      borderRadius: '1.05em',
      alignSelf: 'center',
      gridArea: '7/3/7/6',
      width: '100%',
      margin: '28px auto 0 auto',
      '&:focus': {
        cursor: 'pointer',
      },
      '@media (max-width: 870px)': {
        fontSize: '0.5em',
      },
    },
  };
});

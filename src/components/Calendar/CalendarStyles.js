import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    calendarScheme: {
      display: 'grid',
      gridTemplateRows: 'repeat(8, auto)',
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
      placeSelf: 'center',
      fontSize: '32px',
      marginBottom: '16px',
    },
    mo: {
      gridArea: '2/1',
      placeSelf: 'center',
    },
    tu: {
      gridArea: '2/2',
      placeSelf: 'center',
    },
    we: {
      gridArea: '2/3',
      placeSelf: 'center',
    },
    th: {
      gridArea: '2/4',
      placeSelf: 'center',
    },
    fr: {
      gridArea: '2/5',
      placeSelf: 'center',
    },
    sa: {
      gridArea: '2/6',
      placeSelf: 'center',
    },
    su: {
      gridArea: '2/7',
      placeSelf: 'center',
    },
    dateActive: {
      backgroundColor: '#dc37f8c9'
    },
    dayHover: {
      '&:hover': {
        backgroundColor: '#9c27b0',
        cursor: 'pointer',
      }
    },
    MuiButtonBaseRootMuiButtonRootFormBtn: {
      height: '2em',
      fontSize: '1em',
      borderRadius: '1.05em',
      placeSelf: 'center',
      gridArea: '8/3/8/6',
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

import { createUseStyles, Styles } from 'react-jss';

type StyleKey =
  | 'root'
  | 'rootHeader'
  | 'rootTitle'
  | 'headerStamp'
  | 'headerAuto'
  | 'headerDriver'
  | 'headerLicense'
  | 'table'
  | 'headerTitle'
  | 'row'
  | 'tableRows'
  | 'tableRows1'
  | 'tableRows2'
  | 'tableRows3';
export const useStyles = createUseStyles(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      //gridTemplateColumns: '1fr',
      //gridTemplateRows: 'auto',
      minHeight: '100%',
      backgroundColor: '#ffffff',
    },
    rootHeader: {
      display: 'grid',
      gridTemplateColumns: '350px auto 350px 350px',
      gridTemplateRows: 'auto',
      gap: 20,
      padding: 24,
    },
    rootTitle: {
      justifySelf: 'center',
      height: 'fit-content',
      fontSize: 19,
    },
    headerStamp: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      borderTop: '1px solid #000',
      gridColumn: '1 / 1',
      gridRow: '2/2',
      alignSelf: 'end',
      justifySelf: 'center',
      //textDecoration: 'overline',
      fontStyle: 'italic',
    },
    headerTitle: {
      gridColumn: '2/2',
      gridRow: '2/2',
      alignSelf: 'start',
      fontStyle: 'italic',
    },
    headerAuto: {
      gridColumn: '3 / span 4',
      gridRow: '1/ 1',
      textDecoration: 'underline',
    },
    headerDriver: {
      gridColumn: '3 / 3',
      gridRow: '2/ 2',
      textDecoration: 'underline',
    },
    headerLicense: {
      gridColumn: '4 / 4',
      gridRow: '2/ 2',
      textDecoration: 'underline',
    },
    //*table*//
    table: {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse',
      border: '2px solid #000000',
    },

    row: {
      wordWrap: 'break-word',
      writingMode: 'vertical-rl',
      transformOrigin: 'center',
      transform: 'rotate(-180deg)',
    },
    tableRows: {
      '& th': {
        height: 100,
        border: '1px solid #000000',
      },
    },
    tableRows1: {
      '& th': {
        height: 50,
      },
    },
    tableRows2: {
      '& th': {
        height: 50,
      },
    },
    tableRows3: {
      '& th': {
        height: 150,
      },
    },
  } as Styles<StyleKey>;
});

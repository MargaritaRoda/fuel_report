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
  | 'tableRows3'
  | 'tableBodyRows'
  | 'transparentItem'
  | 'buttonWrapper'
  | 'MuiButtonBaseRootMuiButtonRootReturnBtn';
export const useStyles = createUseStyles(() => {
  return {
    buttonWrapper: {
      position: 'absolute',
      '@media print': {
        display: 'none',
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
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 50,
      marginRight: 50,
      minHeight: '100%',
      backgroundColor: '#ffffff',
    },
    //* header start *//
    rootHeader: {
      display: 'grid',
      gridTemplateColumns: '350px auto 350px 350px',
      gridTemplateRows: 'auto',
      gap: 15,
      padding: 12,
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
    //* header end *//

    //* table start *//
    // * table header start *//
    table: {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse',
      border: '2px solid #000000',
      fontSize: 12,
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
        height: 40,
      },
    },
    tableRows2: {
      '& th': {
        height: 20,
      },
    },
    tableRows3: {
      '& th': {
        height: 100,
      },
    },
    // * table header  end*//

    // * table body start *//
    tableBodyRows: {
      '& td': {
        textAlign: 'center',
        border: '1px solid #000000',
      },
    },
    transparentItem: {
      color: 'transparent',
    },
    // * table body end *//
    //* table end *//
  } as Styles<StyleKey>;
});

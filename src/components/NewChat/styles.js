const styles = theme => ({
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      position: 'absolute',
      color: '#d1d2d3',
      width: '350px',
      top: '105px',
      left: 'calc(50% + 150px - 175px)',
      border: `solid 1px #333539`,
      background: `#1a1d21`,
    },
    input: {
      color: 'whitesmoke',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit,
      color: 'whitesmoke',
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  });
  
  export default styles;
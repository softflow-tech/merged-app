const styles = theme => ({

    content: {
      color: 'white',
      height: '82vh',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      top: '50px',
      width: '35vw',
      position: 'absolute'
    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#d1d2d3',
      color: 'black',
      width: '300px',
      borderRadius: '20px'
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: '#3f51b5',
      color: 'white',
      width: '300px',
      borderRadius: '20px'
    },
  
    chatHeader: {
      color: 'white',
      height: '8%',
      alignItems: 'center',
      position: 'relative',
      fontSize: '18px',
      boxSizing: 'border-box',
      textAlign: 'center',
      marginLeft: '301px',
      background: '#3f51b5',
      justifyContent: 'center',
      display: 'flex',
    }
  
  });
  
  export default styles;
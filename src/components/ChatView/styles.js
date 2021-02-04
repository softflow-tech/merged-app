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
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: 'whitesmoke',
      color: 'black',
      width: '300px',
      borderRadius: '20px'
    },
  
    friendSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: 'linear-gradient(63deg, rgba(52,65,149,1) 0%, rgba(39,45,88,1) 100%, rgba(33,35,59,1) 100%)',
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
      // background-color: #344195;
      background: 'radial-gradient(circle, rgba(52,65,149,1) 0%, rgba(22,27,63,1) 99%)',
      justifyContent: 'center',
      display: 'flex',
      borderBottom: '1px solid rgba(211, 211, 211, 0.267)',
    }
  
  });
  
  export default styles;
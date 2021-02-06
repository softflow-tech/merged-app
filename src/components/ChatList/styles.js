const styles = theme => ({
    root: {
      // backgroundColor: 'white',
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      backgroundColor: '#130f19',
      color: '#d1d2d3',

    },
    listItem: {
      cursor: 'pointer'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;
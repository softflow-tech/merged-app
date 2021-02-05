import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import { Avatar, IconButton } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import { firebase } from '@firebase/app';

class ChatListComponent extends React.Component {
  signOut() {
    // firebase.auth().signOut();
    window.location.reload(false);
  }

  render() {
    // var i;
    const { classes } = this.props;

    if (this.props.chats.length > 0) {
      return (
        <div className={classes.root}>

          <div className='sidebar__header'>
            <div className='sidebar__headerRight' style={{ width: '100%', height: '100%', fontSize: 'large !important', display: 'flex', justifyContent: 'space-evenly' }}>
              <IconButton >
                <AddCircleIcon onClick={this.newChat} id='potato' />
              </IconButton>
              <IconButton >
                <ExitToAppIcon onClick={this.signOut} />
              </IconButton>
            </div>
          </div>

          <div variant="contained"
            fullWidth
            color='primary'
            style={{ height: '8px', backgroundColor: '#3f51b5' }}>
          </div>
          <List>
            {
              this.props.chats.map((_chat, _index) => {
                return (
                  <div key={_index}>
                    <ListItem onClick={() => this.selectChat(_index)}
                      className={classes.listItem}
                      selected={this.props.selectedChatIndex === _index}
                      alignItems="flex-start">
                      <Typography style={{ display: 'none' }}>
                        {i = _chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                      </Typography>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp">{_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography component='span'
                              color='textPrimary' id={`blabla${i}`}>
                              {userFromEmail(i)}
                            </Typography>
                          </React.Fragment>

                        }

                        secondary={
                          <React.Fragment>
                            <Typography component='span'
                              color='textPrimary'>
                              {_chat.messages[_chat.messages.length - 1].message.substring(0, 30) + ' ...'}
                            </Typography>
                          </React.Fragment>
                        } />
                      {
                        _chat.receiverHasRead === false && !this.userIsSender(_chat) ?
                          <ListItemIcon><NotificationImportant className={classes.unreadMessage}></NotificationImportant></ListItemIcon> :
                          null
                      }
                    </ListItem>
                    <Divider />
                  </div>
                )
              })
            }
          </List>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Button variant="contained"
            fullWidth
            color='primary'
            onClick={this.newChat}
            className={classes.newChatBtn}>
            New Message
          </Button>
          <List></List>
        </div>
      );
    }
  }
  userIsSender = (chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;
  newChat = () => this.props.newChatBtnFn();
  selectChat = (index) => this.props.selectChatFn(index);

}
var i;
function userFromEmail(em) {
  firebase
    .firestore()
    .collection('users')
    .doc(em)
    .get()
    .then((doc) => {
      if (doc.exists) {
        document.getElementById(`blabla${em}`).innerText = doc.data().displayName;

      } else {
        // doc.data() will be undefined in this case
        document.getElementById(`blabla${em}`).innerText = 'anonymous';
      }
    })
}


export default withStyles(styles)(ChatListComponent);


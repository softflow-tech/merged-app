import React from 'react';
import { firebase } from '@firebase/app';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton } from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import styles from './styles';

let i;

class ChatListComponent extends React.Component {

  signOut() {
    // firebase.auth().signOut();
    window.location.reload(false);
  }

  render() {
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
                        {userImage(i)}
                        <Avatar id={`image-${i}`} src={`https://avatars.dicebear.com/api/gridy/${avataImage(_chat.users.filter(_user => _user !== this.props.userEmail)[0])}.svg?background=%23ebf1ff`} alt={`${i}`} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography component='span'
                              color='#d1d2d3' id={`blabla${i}`}>
                              {userFromEmail(i)}
                            </Typography>
                          </React.Fragment>
                        }

                        secondary={
                          <React.Fragment>
                            <Typography component='span'
                              color='inherit' id={`bla${i}`} >
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
          <List></List>
        </div>
      );
    }
  }
  userIsSender = (chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;
  newChat = () => this.props.newChatBtnFn();
  selectChat = (index) => this.props.selectChatFn(index);

}


function avataImage(params) {
  var sequence = params
  var matches = sequence.match(/[A-z]/g);
  return (matches.join(''));
}

function userFromEmail(em) {
  firebase
    .firestore()
    .collection('users')
    .doc(em)
    .get()
    .then((doc) => {
      if (doc.exists) {
        document.getElementById(`blabla${em}`).innerText = doc.data().displayName;
        document.getElementById(`bla${em}`).style.color = '#d1d2d3';
      } else {
        // doc.data() will be undefined in this case
        document.getElementById(`blabla${em}`).innerText = 'anonymous';
        document.getElementById(`bla${em}`).style.color = '#d1d2d3';
      }
    })
}


function userImage(em) {
  firebase
    .firestore()
    .collection('users')
    .doc(em)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data().photoURL;
      }
    })
}

export default withStyles(styles)(ChatListComponent);


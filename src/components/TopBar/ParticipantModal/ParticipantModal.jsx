import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import {Avatar,List,ListItem,ListItemAvatar,ListItemText,DialogTitle,Dialog} from '@mui/material';
import { blue } from '@mui/material/colors';
import { ParticipantWrapper } from './ParticipantModal.style';

const ParticipantModal = ({open,onClose,chatRoomName,userList}) => {

  return (
    <ParticipantWrapper>
    { userList.length > 0 && <Dialog onClose={onClose} open={open}>
      <DialogTitle>{chatRoomName}</DialogTitle>
      <List  sx={{pt:0,width:"35vw",maxHeight:"30vh",overflowY:"auto",overflowX:"hidden"}}>
        {userList && userList[0].map(({name}) => (
          <ListItem key={name}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name.charAt(0).toUpperCase() + name.slice(1)}/>
          </ListItem>
        ))}
      </List>
    </Dialog>}
    {!userList.length > 0 &&
        <p>No user</p>
    }
    </ParticipantWrapper>
  )
}

export default ParticipantModal
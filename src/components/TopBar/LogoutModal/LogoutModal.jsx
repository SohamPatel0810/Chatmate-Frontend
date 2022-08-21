import React from 'react'
import { useNavigate } from "react-router-dom";
import {StyledBox} from '../Badge.style'
import {Modal,Typography,Button} from '@mui/material';

const LogoutModal = ({open,onClose,chatRoomName}) => {

    let navigate = useNavigate();

    const leaveHandler = (event) => {
        event.preventDefault();
        navigate("/", { replace: true });
    }

  return (
    <Modal
  open={open}
  onClose={onClose}
  aria-labelledby="modal-modal-title"
>
  <StyledBox>
    <Typography id="modal-modal-title">
      Exit "{chatRoomName}" group?
    </Typography>
    <Button onClick={onClose}>Cancel</Button>
    <Button onClick={leaveHandler}>Exit</Button>
  </StyledBox>
</Modal>
  )
}

export default LogoutModal
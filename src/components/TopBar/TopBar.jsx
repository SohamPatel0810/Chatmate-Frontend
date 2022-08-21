import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { StyledBadge } from './Badge.style';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@mui/material';
import {TopBarWrapper} from './TopBar.style'
import LogoutModal from './LogoutModal/LogoutModal'
import ParticipantModal from './ParticipantModal/ParticipantModal'

const TopBar = ({ chatRoomName,userList }) => {
    const [leaveModal, showLeaveModal] = useState(false)
    const [participantModal, showParticipantModal] = useState(false)
    
    const openLeaveModal = () => {
        showLeaveModal(true)
    }
    const closeLeaveModal = () => {
        showLeaveModal(false)
    }

    const openParticipantModal = () => {
        showParticipantModal(true)
    }
    const closeParticipantModal = () => {
        showParticipantModal(false)
    }

    return (
        <TopBarWrapper>
            <div className='left-container'>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar className='image' src="/broken-image.jpg" />
                </StyledBadge>
                <Button sx={{ textTransform: 'none' }} onClick={openParticipantModal}>
                    <div style={{display:"flex",flexDirection:"column",maxWidth:"50vw", overflowX:"hidden"}}>
                    <h3 className='heading'>{chatRoomName}</h3>
                    <div style={{display:"flex",flexDirection:"row"}}>
                        {
                            userList.length > 0 && userList[0].map(({name}, index) => {
                                if (index === userList[0].length - 1)
                                  return (
                                    <p style={{color:"white",margin:"0px"}} key={`${index}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                                  );
                                return <p style={{color:"white",margin:"0px"}} key={`${index}`}>{name.charAt(0).toUpperCase() + name.slice(1) + ",\xa0"}</p>;
                              })
                        }
                    </div>
                    </div>
                    </Button>
            </div>
            <div className='right-container'>
            <Tooltip title="Leave">
            <Button sx={{color: "#FFFFFF"}} onClick={openLeaveModal}><ExitToAppIcon/></Button>
            </Tooltip>
            </div>
            <LogoutModal open={leaveModal} onClose={closeLeaveModal} chatRoomName={chatRoomName}/>
            <ParticipantModal open={participantModal} onClose={closeParticipantModal} chatRoomName={chatRoomName} userList={userList}/>
        </TopBarWrapper>
    )
}

export default TopBar
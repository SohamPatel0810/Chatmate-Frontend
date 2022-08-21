import React from 'react'
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {CustomInputWrapper} from './CustomInput.style'

const CustomInput = ({message,inputHandler,submitHandler,sendMessage}) => {
  return (
    <CustomInputWrapper>
        <textarea className = 'custom-input' placeholder='Message' type="text" value = {message} onChange = {inputHandler} onKeyUp={submitHandler}/>
        <Button sx ={{bgcolor:"#2F759B",padding: "6px 16px 6px 11px"}} className = 'send-btn' variant="contained" onClick={sendMessage} endIcon={<SendRoundedIcon />}>
        </Button>
    </CustomInputWrapper>
  )
}

export default CustomInput
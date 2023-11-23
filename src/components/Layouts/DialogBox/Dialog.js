import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaEdit } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import SendIcon from '@mui/icons-material/Send';
import { SendMailHandler } from '../../../Redux/Actions/UserAction';
import { useDispatch } from 'react-redux';

function DialogComponent({email, id}) {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState();
    const [subject ,setSubject] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const SendMail = ()=>{
    dispatch(SendMailHandler(id, subject,  msg));
    setOpen(false);
  }
  

  return (
    <>
    
    <Button variant="contained"  onClick={handleClickOpen} startIcon={<FaEdit /> }>
     Write a Email
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>New Email</DialogTitle>
        <DialogContent>
          <DialogContentText style={{width:"30rem"}} className='DialogText'>
            To <span>{email}</span>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="Text"
            fullWidth
            variant="standard"
            aria-readonly
            onChange={e=>setSubject(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="Text"
            fullWidth
            variant="standard"
            aria-readonly
            onChange={e=>setMsg(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
        Cancel
      </Button>
          <Button variant="contained" onClick={SendMail} endIcon={<SendIcon />}>
  Send
</Button>
        </DialogActions>
      </Dialog>
    
    </>
  )
}

export default DialogComponent
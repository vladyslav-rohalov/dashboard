import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Alert, IconButton } from '@mui/material';

export default function AlertNotify({ error }) {
  const [messages, setMessages] = useState(error?.message || []);

  const handleClose = index => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };
  return (
    <Stack sx={{ width: '100%', mt: 4 }} spacing={2}>
      {messages.map((message, index) => (
        <Alert
          key={index}
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => handleClose(index)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      ))}
    </Stack>
  );
}

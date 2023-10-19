import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { Container, GreetingBlock, GreetingText } from './panel.styled';
import { TabStyled } from './panel.styled';
import { Box, Button, Tabs } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Panel({ user, value, handleChange }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Box>
        <GreetingBlock>
          <GreetingText>Hi, {user.firstName}</GreetingText>
        </GreetingBlock>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          aria-label="Products menu"
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'primary.accent',
              borderRadius: 4,
              width: 4,
            },
          }}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <TabStyled onClick={handleChange.bind(this, 0)} label={'Add new'} />
          <TabStyled onClick={handleChange.bind(this, 1)} label={'Products'} />
          <TabStyled onClick={handleChange.bind(this, 2)} label={'Users'} />
          <TabStyled onClick={handleChange.bind(this, 3)} label={'Orders'} />
          <TabStyled onClick={handleChange.bind(this, 4)} label={'Reviews'} />
        </Tabs>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{ color: 'primary.dim' }}
          startIcon={<LogoutIcon />}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
}

import { Container, GreetingBlock, GreetingText } from './panel.styled';
import { TabStyled } from './panel.styled';
import { Box, Button, Tabs } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Panel({ user, value, handleChange }) {
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
          <TabStyled onClick={handleChange.bind(this, 0)} label={'Products'} />
          <TabStyled onClick={handleChange.bind(this, 1)} label={'Users'} />
          <TabStyled onClick={handleChange.bind(this, 2)} label={'X'} />
          <TabStyled onClick={handleChange.bind(this, 3)} label={'X'} />
          <TabStyled onClick={handleChange.bind(this, 4)} label={'X'} />
          <TabStyled onClick={handleChange.bind(this, 5)} label={'X'} />
        </Tabs>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{ color: 'primary.dim' }}
          startIcon={<LogoutIcon />}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
}

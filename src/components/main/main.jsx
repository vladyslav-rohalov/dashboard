import { useState } from 'react';
import { Container } from './main.styled';
import Panel from './panel/panel';
import AddNew from './addNew/addNew';

export default function Main({ user }) {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Container>
      <Panel
        user={user}
        value={tabValue}
        handleChange={value => setTabValue(value)}
      />
      {tabValue === 0 && <AddNew />}
    </Container>
  );
}

import { useState } from 'react';
import { Container, Section } from './main.styled';
import Panel from './panel/panel';
import AddNew from './addNew/addNew';
import Products from './products/products';

export default function Main({ user }) {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Container>
      <Panel
        user={user}
        value={tabValue}
        handleChange={value => setTabValue(value)}
      />
      <Section component={'section'}>
        {tabValue === 0 && <AddNew />}
        {tabValue === 1 && <Products />}
      </Section>
    </Container>
  );
}
